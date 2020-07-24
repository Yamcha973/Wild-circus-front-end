import React from 'react';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  button {
    background: #7D80DA;
      height: 50px;
  width: 150px;
  margin: 0px 25px;
  color: #fff;
  border-radius: 15px;
  font-size: 16px;
  border: 1px;
  cursor: pointer;
  transition: .3s;
  }
  button:hover {
    transform: scale(1.2);
    transition: .3s;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7D80DA;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    button {
      
    }
  }
`;


const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <button to="/" renderAs={Link}>
            Home
            </button>
                <button to="/performance" renderAs={Link}>
                  Performances
                  </button>
            <button to="/about" renderAs={Link}>
              About Us
              </button>
            <button to="/contact" renderAs={Link}>
              Contact Us
              </button>
            <button to="/ticket" renderAs={Link}>
              Book a ticket
              </button>
        </Ul>
    )
};

export default RightNav;