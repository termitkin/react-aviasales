import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CurrencyButton extends PureComponent {
  render() {
    let className = 'filter__currency-button ' + this.props.round;

    this.props.currency === this.props.currentCurrency ? className += ' filter__currency-button_active' : className += '';

    return (
      <button className={className} onClick = {this.handleClick}>
        { this.props.currency }
      </button>
    )
  }

  handleClick = () => {
    this.props.clicked(this.props.currency);
  }

}

CurrencyButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  round: PropTypes.string
}

export default CurrencyButton
