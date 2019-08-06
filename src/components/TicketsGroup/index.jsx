import React, { useState, useEffect } from "react";
import Ticket from "../Ticket";
import PropTypes from "prop-types";
import "./style.css";

const USD_RUB = "https://api.ratesapi.io/api/latest?base=USD&symbols=RUB";
const EUR_RUB = "https://api.ratesapi.io/api/latest?base=EUR&symbols=RUB";

const TicketsGroup = props => {
  let [data, newData] = useState(null);

  useEffect(() => {
    let temp = { usd: "", eur: "" };
    fetch(USD_RUB)
      .then(response => response.json())
      .then(data => (temp.usd = data.rates.RUB));
    fetch(EUR_RUB)
      .then(response => response.json())
      .then(data => (temp.eur = data.rates.RUB));

    newData((data = temp));
  }, []);

  const currentCurrency = props.currentCurrency;
  const stops = props.stops;
  const ticketsFromProps = props.tickets;

  const ticketsToShow = [];
  let filteredTickets = [];

  stops.forEach(el => {
    filteredTickets = ticketsFromProps.filter(ticket => {
      if (ticket.stops === Number(el)) {
        return true;
      }
      return false;
    });

    ticketsToShow.push(...filteredTickets);
  });

  ticketsToShow.sort((a, b) => a.price - b.price);

  const tickets = ticketsToShow.map(ticket => (
    <Ticket
      currency={currentCurrency}
      key={ticket.price + ticket.arrival_time + ticket.departure_time}
      tickets={ticket}
      currentCurrency={data}
    />
  ));

  return <div className="tickets-wrap">{tickets}</div>;
};

TicketsGroup.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCurrency: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TicketsGroup;
