import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const CurrencyButton = props => {
  let className = 'filter__currency-button ' + props.round;

  props.currency === props.currentCurrency ? className += ' filter__currency-button_active' : className += '';

  return (
    <button aria-label={props.ariaLabel} className={className} onClick = {handleClick}>
      { props.currency }
    </button>
  )

  function handleClick() {
    props.clicked(props.currency)
  }

}

CurrencyButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  round: PropTypes.string
}

export default CurrencyButton
