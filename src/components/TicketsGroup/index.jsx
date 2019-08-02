import React, { Component } from "react";
import Ticket from "../Ticket";
import PropTypes from "prop-types";
import "./style.css";

const API =
  "https://free.currconv.com/api/v7/convert?q=USD_RUB,EUR_RUB&compact=ultra&apiKey=55a48a56511997fc7eaf";

class TicketsGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        });
      });
  }

  render() {
    const currentCurrency = this.props.currentCurrency;
    const stops = this.props.stops;
    const ticketsFromProps = this.props.tickets;

    let filteredTickets = [];
    let ticketsToShow = [];

    stops.forEach(el => {
      filteredTickets = ticketsFromProps.filter(ticket => {
        if (ticket.stops === parseInt(el)) {
          return true;
        } else {
          return false;
        }
      });

      ticketsToShow.push(...filteredTickets);
    });

    ticketsToShow.sort((a, b) => {
      return a.price - b.price;
    });

    const tickets = ticketsToShow.map(ticket => (
      <Ticket
        currency={currentCurrency}
        key={ticket.price + ticket.arrival_time + ticket.departure_time}
        tickets={ticket}
        currentCurrency={this.state.data}
      />
    ));

    return <div className="tickets-wrap">{tickets}</div>;
  }
}

TicketsGroup.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCurrency: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TicketsGroup;
