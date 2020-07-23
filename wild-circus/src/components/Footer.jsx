import React from 'react';
import Container from '@material-ui/core/Container';
import Facebook from '../pictures/facebook-app-symbol.svg';
import Instagram from '../pictures/instagram-logo.svg';
import Twitter from '../pictures/twitter-black-shape.svg';

function Footer() {
  return (
    <Container maxWidth className="bloc">
      <div className="container">
        <div className="logo-rs ">
          <a
            className="logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/jessmnds.swagga/"
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
            href="https://www.instagram.com/swagga_jess/"
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
            href="https://twitter.com/call_me_lilj"
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
