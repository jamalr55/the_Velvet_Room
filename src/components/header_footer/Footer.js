import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  var tempDate = new Date();
  var date = tempDate.getFullYear();
  const currDate = date;

  return (
    <footer className="bck_black">
      <Fade delay={500}>
        <div className="font_righteus footer_logo_venue">The Velvet Room</div>
        <div className="footer_copyright">
          The Velvet Room<span> {currDate}</span>. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
