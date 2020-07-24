import React from 'react';
import Container from '@material-ui/core/Container';
import Facebook from '../pictures/facebook-app-symbol.svg';
import Instagram from '../pictures/instagram-logo.svg';
import Twitter from '../pictures/twitter-black-shape.svg';
import '../Style/Footer.css';

function Footer() {
  return (
    <Container maxWidth className="bloc">
      <div className=" ">
        <div className="logo-rs ">
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/"
          >
            <img
              className="logo"
              src={Facebook}
              alt="facebook"
            />
          </a>
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/"
          >
            <img
              className="logo"
              src={Instagram}
              alt="instagram"
            />
          </a>
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/"
          >
            <img
              className="logo"
              src={Twitter}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
