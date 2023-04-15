import React from "react";
import "./footer.css";
const Hello = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* <div className="footer-section about">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div> */}
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <ul>
            <li>
              <i className="fa fa-map-marker"></i> 123 Main St, City
            </li>
            <li>
              <i className="fa fa-phone"></i> +1 (555) 123-4567
            </li>
            <li>
              <i className="fa fa-envelope"></i> info@example.com
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Quick links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/connection">Connection</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="facebook.com/danicabullo">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="twitter.com/CabulloDan">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="instagram.com/danica.ui">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="linkedin.com/danicacabullo">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Created by Danica Cabullo</p>
        <p>© 2023 Mellow Bliss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Hello;
