import React, { useState } from "react";
import TicketsGroup from "./TicketsGroup";
import tickets from "./tickets.json";
import Filter from "./Filter";
import Logo from "./Logo";
import "./style.css";

const App = () => {
  let [currentCurrency, newCurrentCurrency] = useState("rub");
  let [stops, newStops] = useState([]);

  const cr = cur => newCurrentCurrency((currentCurrency = cur));
  const st = sts => newStops((stops = sts));

  return (
    <div className="wrapper">
      <h1 className="page-heading">
        Покупка билетов из Владивостока в Тель-Авив
      </h1>
      <Logo />
      <div role="main" id="main" className="content-wrapper">
        <Filter currentCurrency={cr} stops={st} />
        <TicketsGroup
          tickets={tickets.tickets}
          currentCurrency={currentCurrency}
          stops={stops}
        />
      </div>
    </div>
  );
};

export default App;
