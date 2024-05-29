import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-parent">
        <div className="left">
          <h1>MORENT</h1>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="right">
          <div className="detailed">
            <div className="about">
              <h2>About</h2>
              <ul>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
            <div className="community">
              <h2>Community</h2>
              <ul>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            <div className="socials">
              <h2>Socials</h2>
              <ul>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h4>©️2024 MORENT. All rights reserveed</h4>
      <div className="terms">
        <h4>Privacy & Policy</h4>
        <h4>Terms & Conditions</h4>
      </div>
    </div>
  );
};

export default Footer;
