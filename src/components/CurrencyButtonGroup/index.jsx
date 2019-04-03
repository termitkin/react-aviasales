import React, {PureComponent} from 'react'
import CurrencyButton from '../CurrencyButton'
import PropTypes from 'prop-types'
import './style.css'

class CurrencyButtonGroup extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      currency: 'rub'
    }

  }

  render() {
    return (      
      <div aria-label="В какой валюте показывать цены" className="filter__currency-buttons-group">
        <CurrencyButton ariaLabel="рубли" currency='rub' currentCurrency = {this.state.currency} clicked = { this.clicked } round = 'filter__currency-button_round_left' />
        <CurrencyButton ariaLabel="доллары" currency='usd' currentCurrency = {this.state.currency} clicked = { this.clicked } />
        <CurrencyButton ariaLabel="евро" currency='eur' currentCurrency = {this.state.currency} clicked = { this.clicked } round = 'filter__currency-button_round_right' />
      </div>
    )
  }

  clicked = cur => {
    this.setState({
      currency: cur
    })

    this.props.currentCurrency(cur);

  }  
}

CurrencyButtonGroup.propTypes = {
  currentCurrency: PropTypes.func.isRequired
}

export default CurrencyButtonGroup
