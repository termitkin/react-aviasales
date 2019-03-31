import React, {PureComponent} from 'react'
import Checkbox from '../Checkbox'
import checkboxes from './checkboxes.json'
import { checkBoxToStops } from './checkBoxToStops.js'
import PropTypes from 'prop-types'
import './style.css'

class CheckboxGroup extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checkBox: true,
      checkBox0: true,
      checkBox1: true,
      checkBox2: true,
      checkBox3: true
    }
  }

  componentDidMount() {
    this.props.stops(checkBoxToStops(this.state));
  }
  componentDidUpdate() {
    this.props.stops(checkBoxToStops(this.state));
  }

  render() {
    const checkbox = checkboxes.checkboxes.map(checkbox => 
      <Checkbox key={checkbox.key} name={checkbox.name} labelText={checkbox.label} changed={this.changed} checked={this.state[checkbox.name]} only={this.only} />
    )

    return (
      <div className="filter__stop-checkboxes-group">
        {checkbox}
      </div>
    )
  }

  only = elem => {
    let obj = this.state;
    for (let key in obj) {
      this.setState({
        [key]: false
      })
    }
    this.setState({
      [elem]: true
    })

  }

  changed = elem => {
    // Если включили чекбокс "все", то включить все остальные чекбоксы
    if (elem === 'checkBox' && this.state.checkBox === false) {
      let obj = this.state;
      for (let key in obj) {
        this.setState({
          [key]: true
        })
      }
    }

    // Если выключили чекбокс "все", то выключить все остальные чекбоксы
    else if (elem === 'checkBox' && this.state.checkBox === true) {
      let obj = this.state;
      for (let key in obj) {
        this.setState({
          [key]: false
        })
      }
    }

    // Если включили чекбокс не "все", то выключить чеккбокс "все"
    else if (elem !== 'checkBox' && this.state.checkBox === true) {
      this.setState({
        checkBox: false
      })
    }

    this.setState({
      [elem]: !this.state[elem]
    })

  }

}

CheckboxGroup.propTypes = {
  stops: PropTypes.func.isRequired
}

export default CheckboxGroup