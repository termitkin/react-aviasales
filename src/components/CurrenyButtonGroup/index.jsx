import React, {PureComponent} from 'react'
import CurrencyButton from '../CurrencyButton'
import PropTypes from 'prop-types'
import './style.css'

class CurrenyButtonGroup extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      currency: 'rub'
    }

  }

  render() {
    return (      
      <div className="filter__currency-buttons-group">
        <CurrencyButton currency='rub' currentCurrency = {this.state.currency} clicked = { this.clicked } round = 'filter__currency-button_round_left' />
        <CurrencyButton currency='usd' currentCurrency = {this.state.currency} clicked = { this.clicked } />
        <CurrencyButton currency='eur' currentCurrency = {this.state.currency} clicked = { this.clicked } round = 'filter__currency-button_round_right' />
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

CurrenyButtonGroup.propTypes = {
  currentCurrency: PropTypes.func.isRequired
}

export default CurrenyButtonGroup
