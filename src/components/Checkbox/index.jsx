import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Checkbox = props => {
  return (
    <div className="filter__stop-checkbox-wrap">
      <input className="filter__stop-checkbox" id={props.name} type="checkbox" onChange={handleChange} checked={props.checked} />
      <label className="filter__stop-label" htmlFor={props.name}> {props.labelText}</label>
      {props.name === 'checkBox' ? '' : <button className="filter__stop-checkbox-only-button" onClick={handleOnly}>только</button> }
    </div>
  )

  function handleOnly() {
    props.only(props.name);
  }

  function handleChange() {
    props.changed(props.name);    
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
