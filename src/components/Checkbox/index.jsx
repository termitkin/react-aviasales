import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Checkbox extends PureComponent {
  render() {
    return (
      <div className="filter__stop-checkbox-wrap">
        <input className="filter__stop-checkbox" id={this.props.name} type="checkbox" onChange={this.handleChange} checked={this.props.checked} />
        <label className="filter__stop-label" htmlFor={this.props.name}> {this.props.labelText}</label>
        {this.props.name === 'checkBox' ? '' : <button className="filter__stop-checkbox-only-button" onClick={this.handleOnly}>только</button> }
      </div>
    )
  }

  handleOnly = () => {
    this.props.only(this.props.name);
  }

  handleChange = () => {
    this.props.changed(this.props.name);    
  }

}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  only: PropTypes.func.isRequired
}

export default Checkbox
