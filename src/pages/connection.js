import React from "react";
import "./connection.css";
import Footer from "../components/footer";

class Connection extends React.Component {
  render() {
    return (
      <div>
        <div className="contact-us-container">
          <div className="contact-info">
            <h2>Opening hours:</h2>
            <p>Monday-Saturday: 07:00-16:00</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="contact-form">
            <h2>
              <span role="img" aria-label="envelope">
                &#x2709;
              </span>
              Message us!
            </h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="txtfld"
                style={{ border: "2px solid #5a5858", padding: "10px" }}
              />
              <input
                type="email"
                placeholder="Your email address"
                style={{ border: "2px solid #5a5858", padding: "10px" }}
              />
              <input
                type="text"
                placeholder="Message Subject"
                style={{ border: "2px solid #5a5858", padding: "10px" }}
              />
              <textarea
                placeholder="Message"
                style={{ border: "2px solid #5a5858", padding: "10px" }}
              ></textarea>
              <button type="submit">Forward</button>
            </form>
          </div>
          <h2>We are here!</h2>
          <div className="contact-image">
            <img src="https://utcakereso.hu/tile/osm/18/144950/91675.png?3" />
          </div>
          {/* <div className="contact-map">
          <MapContainer />
        </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Connection;
