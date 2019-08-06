import React, { useState } from "react";
import CurrencyButton from "../CurrencyButton";
import PropTypes from "prop-types";
import "./style.css";

const CurrencyButtonGroup = props => {
  let [currency, newCurrency] = useState("rub");

  const clicked = cur => {
    newCurrency((currency = cur));
    props.currentCurrency(cur);
  };

  return (
    <div
      aria-label="В какой валюте показывать цены"
      className="filter__currency-buttons-group"
    >
      <CurrencyButton
        ariaLabel="рубли"
        currency="rub"
        currentCurrency={currency}
        clicked={clicked}
        round="filter__currency-button_round_left"
      />
      <CurrencyButton
        ariaLabel="доллары"
        currency="usd"
        currentCurrency={currency}
        clicked={clicked}
      />
      <CurrencyButton
        ariaLabel="евро"
        currency="eur"
        currentCurrency={currency}
        clicked={clicked}
        round="filter__currency-button_round_right"
      />
    </div>
  );
};

CurrencyButtonGroup.propTypes = {
  currentCurrency: PropTypes.func.isRequired
};

export default CurrencyButtonGroup;
