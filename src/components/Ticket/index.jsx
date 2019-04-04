import React from 'react'
import { displayDate } from './displayDate.js'
import { stopsText } from './stopsText.js'
import { companyLogo } from './companyLogo.js'
import { priceConverter } from './priceConverter.js'
import PropTypes from 'prop-types'
import './style.css'

const Ticket = props => {
    const { origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, carrier, stops, price } = props.tickets;

    const departureDate = displayDate(departure_date);
    const arrivalDate = displayDate(arrival_date);

    const finalPrice = priceConverter(price, props.currentCurrency);

    return(
      <div className='ticket tickets-wrap__ticket' role="article" aria-label="Билет">
        <div className="ticket__logo-and-buy-button">
           <div className = { companyLogo(carrier) }></div>
          <button className="buy-button ticket__buy-button" type="button">
            <span className="buy-button__text">Купить</span>
            <span className="buy-button__text">за { finalPrice }</span>
          </button>
        </div>

        <div className="ticket__times-and-stops">
          <div className="ticket__time" aria-label="Время вылета">{ departure_time }</div>
          <div className="stops">
            <div className="stops__text" aria-label="Количество пересадок">{ stops ? stops : '' } { stopsText(stops) }</div>
          </div>
          <div className="ticket__time" aria-label="Время прилета">{ arrival_time }</div>
        </div>

        <div className="ticket__route">
          <div className="ticket__origin">
            <div className="ticket__airport-and-city" aria-label="Вылет из">
              <span className="ticket__airport-code">{ origin }, </span>
              <span className="ticket__city">{ origin_name }</span>
            </div>

            <div className="ticket__date-and-day" aria-label="Дата вылета">
              <span className="ticket__date">{ departureDate }</span>
            </div>
          </div>

          <div className="ticket__destination">
            <div className="ticket__airport-and-city" aria-label="Прилет в">
              <span className="ticket__city">{ destination_name }, </span>
              <span className="ticket__airport-code">{ destination }</span>
            </div>

            <div className="ticket__date-and-day" aria-label="Дата прилета">
              <span className="ticket__date">{ arrivalDate }</span>
            </div>
          </div>
        </div>

      </div>
    )
}

Ticket.propTypes = {

  tickets: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })

}

export default Ticket