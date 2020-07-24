import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const Nav = styled.nav`
margin-top: 1%;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color: #7D80DA;
    font-weight: bold;
    font-size: 30px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Wild Circus
      </div>
      <BurgerMenu />
    </Nav>
  )
}

export default Navbar;