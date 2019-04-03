import React, {PureComponent} from 'react'
import CurrencyButtonGroup from '../CurrencyButtonGroup'
import CheckboxGroup from '../CheckboxGroup'
import PropTypes from 'prop-types'
import './style.css'

class Filter extends PureComponent {
  render() {
    return (
      <div className="filter">
        <fieldset className="filter__controls-wrap">
          <legend className="filter__titles">Валюта</legend>
          
          <CurrencyButtonGroup currentCurrency = {this.currentCurrency} />
        </fieldset>
        <fieldset className="filter__controls-wrap">
          <legend className="filter__titles">Количество пересадок</legend>

          <CheckboxGroup stops={this.stops} />
        </fieldset>
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