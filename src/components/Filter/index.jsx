import React, {PureComponent} from 'react'
import CurrenyButtonGroup from '../CurrenyButtonGroup'
import CheckboxGroup from '../CheckboxGroup'
import PropTypes from 'prop-types'
import './style.css'

class Filter extends PureComponent {
  render() {
    return (
      <div className="filter">
        <div className="filter__titles">Валюта</div>

        <CurrenyButtonGroup currentCurrency = {this.currentCurrency} />

        <div className="filter__titles">Количество пересадок</div>

        <CheckboxGroup stops={this.stops} />
      </div>
    )
  }

  stops = stops => {
    this.props.stops(stops);
  }

  currentCurrency = cur => {
    this.props.currentCurrency(cur);
  }

}

Filter.propTypes = {
  currentCurrency: PropTypes.func.isRequired,
  stops: PropTypes.func.isRequired
}

export default Filter