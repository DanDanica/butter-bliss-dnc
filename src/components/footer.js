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
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Created by Danica Cabullo</p>
        <p>© 2023 Butter Bliss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Hello;
