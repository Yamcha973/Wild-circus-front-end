import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import '../Style/Market.css';

const API_URL = process.env.REACT_APP_API_URL;

function Ticket() {
  const [ticket, setTickets] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { ticketId } = useParams();
  const dispatch = useDispatch();



  useEffect(() => {
    function getTickets() {
      axios.get(`${API_URL}/api/ticket`)
        .then((res) => res.data)
        .then((data) => { setTickets(data); });
    }

    getTickets();
  }, [ticketId]);

  return (
    <>
    <div className="ticket_flexContainer">
      <div className="image">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IUFhaYktysB-kqhz_ahVH2fdACjkbs2I" width="640" height="480" />
      </div>
      <div className="ticket_bg">
        <h2>Our offers :</h2>
        <div className="ticketList">
          {ticket.map((ticket) => (
            <li key={ticket.id} className="container">
              <p>
                {ticket.category}
                </p>
                <p>{ticket.quantity_price}</p>
                <p>
              {ticket.price}
              {' '}
              €
              </p>
              <button type="button" className="product_minibutton" onClick={() => setQuantity(quantity - 1)}>-</button>
            {quantity}
            <button type="button" className="product_minibutton" onClick={() => setQuantity(quantity + 1)}>+</button>
            <button
              type="button"
              onClick={() => dispatch({
                type: 'ADD', id: ticket.id, quantity_price: ticket.quantity_price, price: ticket.price, quantity,
              })}
              >
              Add reserve
            </button>
            </li>
          ))}
          <p>*Only groups contact us</p>
        </div>
      </div>
    </div>
</>
  );
}

export default Ticket;
