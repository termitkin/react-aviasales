import React, {PureComponent} from 'react'
import Ticket from '../Ticket'
import PropTypes from 'prop-types'
import './style.css'

class TicketsGroup extends PureComponent {
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
        }
        else {
          return false;
        }
      })

      ticketsToShow.push(...filteredTickets);

    })

    ticketsToShow.sort((a, b) => {
      return a.price - b.price;
    })

    const tickets = ticketsToShow.map(ticket => <Ticket currentCurrency={currentCurrency} key = {ticket.price+ticket.arrival_time+ticket.departure_time} tickets = {ticket} />)

    return(
      <div className = 'tickets-wrap'>
        { tickets }
      </div>
    )
  }
}

TicketsGroup.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCurrency: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TicketsGroup
