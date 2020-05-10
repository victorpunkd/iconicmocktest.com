import React, { Component } from "react";
import "./Gallery.css";
import gallery1 from "./gallery1.jpg";
import gallery2 from "./gallery2.jpg";
import gallery3 from "./gallery3.jpg";
import gallery4 from "./gallery4.jpg";
import gallery5 from "./gallery5.jpg";
import gallery6 from "./gallery6.jpeg";

export class Gallery extends Component {
  render() {
    return (
      <div className="galleryContainer">
        <div className="heading">Gallery</div>
        <div className="headingDescription">Some of our pictures</div>
        <div className="gallery w3-row-padding" style={{ padding: "1% 2%" }}>
          <div className="w3-third" style={{ marginTop: 10 }}>
            <img
              src={gallery1}
              style={{ width: "100%", height: 165 }}
              alt="galery1"
            ></img>
            <img
              src={gallery5}
              style={{ width: "100%", height: 165, marginTop: 20 }}
              alt="galery1"
            ></img>
          </div>
          <div className="w3-third" style={{ marginTop: 10 }}>
            <img
              src={gallery6}
              style={{ width: "100%", height: 350 }}
              alt="galery1"
            ></img>
          </div>
          <div className="w3-third" style={{ marginTop: 10 }}>
            <div className="w3-row" style={{ width: "100%", height: 165 }}>
              <div className="w3-half " style={{ height: "100%" }}>
                <img
                  src={gallery2}
                  style={{ width: "100%", height: "100%" }}
                  className="mobileViewRightPadding"
                  alt="galery1"
                ></img>
              </div>
              <div className="w3-half" style={{ height: "100%" }}>
                <img
                  src={gallery3}
                  style={{ width: "100%", height: "100%" }}
                  className="mobileViewLeftPadding"
                  alt="galery1"
                ></img>
              </div>
            </div>
            <div>
              <img
                src={gallery4}
                style={{ width: "100%", height: 165, marginTop: 20 }}
                alt="galery1"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
