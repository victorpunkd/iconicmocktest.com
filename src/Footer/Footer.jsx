import React, { Component } from "react";
import "./Footer.css";
import victor from "./victor_icon.png";

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footer">
          <div>Terms & Conditions</div>
          <div style={{ marginTop: 20 }}>
            <span>
              {" "}
              <i class="w3-xlarge fa fa-facebook-official"></i>
            </span>
          </div>
          <div style={{ marginTop: 20 }}>
            <i class="w3-xlarge fa fa-copyright"></i> 2019 Iconic Mock Test all
            rigts reserved
          </div>
          <div style={{ marginTop: 20 }}>
            <a
              class="developer_link"
              href="https://victordeb.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <i class="fa fa-code"></i> Developed, Designed and Maintain by{" "}
              <img
                alt="victor"
                style={{ width: 25, height: 25, marginTop: -6 }}
                src={victor}
              />{" "}
              victordeb.me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
