import React, { PureComponent } from "react";
import TicketsGroup from "./TicketsGroup";
import tickets from "./tickets.json";
import Filter from "./Filter";
import Logo from "./Logo";
import "./style.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCurrency: "rub",
      stops: []
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="page-heading">
          Покупка билетов из Владивостока в Тель-Авив
        </h1>
        <Logo />
        <div role="main" id="main" className="content-wrapper">
          <Filter currentCurrency={this.currentCurrency} stops={this.stops} />
          <TicketsGroup
            tickets={tickets.tickets}
            currentCurrency={this.state.currentCurrency}
            stops={this.state.stops}
          />
        </div>
      </div>
    );
  }

  currentCurrency = currency => {
    this.setState({
      currentCurrency: currency
    });
  };

  stops = stops => {
    this.setState({
      stops: stops
    });
  };
}

export default App;
