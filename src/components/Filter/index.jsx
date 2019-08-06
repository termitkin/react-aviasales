import React from "react";
import CurrencyButtonGroup from "../CurrencyButtonGroup";
import CheckboxGroup from "../CheckboxGroup";
import PropTypes from "prop-types";
import "./style.css";

const Filter = props => {
  const st = sts => props.stops(sts);
  const cr = cur => props.currentCurrency(cur);

  return (
    <div className="filter">
      <fieldset className="filter__controls-wrap">
        <legend className="filter__titles">Валюта</legend>

        <CurrencyButtonGroup currentCurrency={cr} />
      </fieldset>
      <fieldset className="filter__controls-wrap">
        <legend className="filter__titles">Количество пересадок</legend>

        <CheckboxGroup stops={st} />
      </fieldset>
    </div>
  );
};

Filter.propTypes = {
  currentCurrency: PropTypes.func.isRequired,
  stops: PropTypes.func.isRequired
};

export default Filter;
