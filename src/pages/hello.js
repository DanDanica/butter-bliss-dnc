import React from "react";
import "./style.css";
import Footer from "../components/footer";
const Hello = () => {
  return (
    <div className="body-container">
      <div className="header-container">
        <div className="header">
          <h1>There is a place in the heart of the city center</h1>
        </div>
        {/*  <h1 className="heading">
          There is a place in the heart of the city center
        </h1> */}
        {/* <div className="image-container">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-holding-coffee-cup-3462706-2903823.png"
            alt="sample image"
            className="image"
          />
        </div> */}
      </div>
      <div>
        <h2 className="hello">Hello! {"\u{1F44B}"}</h2>
      </div>

      <p className="paragraph">
        Mellow Bakeshop is a quaint and cozy bakery nestled in the heart
        of the city. The aroma of freshly baked goods fills the air, inviting
        customers to indulge in a wide selection of delicious treats. From
        classic cookies to elaborate cakes, Mellow Bliss offers a variety of
        baked goods to satisfy any sweet tooth.
      </p>
      <p className="paragraph">
        At Mellow Bliss, we believe in using only the highest quality
        ingredients. We use real butter, fresh eggs, and the finest chocolates
        and fruits to create our baked goods. Our skilled bakers craft each item
        with care and attention to detail, ensuring that every bite is a
        heavenly experience.
      </p>
      <p className="paragraph">
        In addition to our daily selection of baked goods, we also offer custom
        cakes and cupcakes for special occasions such as weddings, birthdays,
        and corporate events. Our talented bakers work closely with each
        customer to create a unique and personalized design that perfectly fits
        the occasion.
      </p>
      <p className="paragraph">
        At Mellow Bliss, we are more than just a bakery. We are a place where
        friends and family can gather to share a cup of coffee and a delicious
        treat. Our warm and welcoming atmosphere is the perfect setting for a
        cozy morning coffee or an afternoon catch-up session with friends. Come
        visit us and experience the blissful indulgence of Mellow Bliss
        Bakeshop.
      </p>
      <Footer />
      {/* <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
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
          <p>© 2023 My Site. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Hello;
