import React, { Component } from "react";
import "./Results.css";
import ankur from "./ankur.jpeg";
import rajdep from "./rajdep.jpeg";
import shuvodip from "./shuvodip.jpeg";
import sanyukta from "./sanyukta.jpeg";
import sayantan from "./sayantan.jpeg";

export class Results extends Component {
  render() {
    return (
      <div className="resultsContainer">
        <div className="heading">Results</div>
        <div className="headingDescription">
          Some of our meritorious students and their achivement
        </div>
        <div
          className="w3-text-gray w3-xlarge"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Results will be announced between 13th - 14th February
        </div>
        <div className="results w3-row">
          <div
            className="w3-col w3-mobile"
            style={{ width: "20%", marginTop: 10 }}
          >
            <div className="resultImage">
              <img
                alt="studentimage"
                src={sanyukta}
                className="studentImage"
              ></img>
              <div className="resultOverlay">
                <div className="w3-large">Sanyukta Basu</div>
                <div className="w3-small">IMT Percentage - 95%</div>
                <div className="w3-small">H.S Percentage - 99.2%</div>
              </div>
            </div>
          </div>
          <div
            className="w3-col w3-mobile"
            style={{ width: "20%", marginTop: 10 }}
          >
            <div className="resultImage">
              <img
                alt="studentimage"
                src={ankur}
                className="studentImage"
              ></img>
              <div className="resultOverlay">
                <div className="w3-large">Ankur Chattopaddhay</div>
                <div className="w3-small">IMT Percentage - 90%</div>
                <div className="w3-small">H.S Percentage - 92.2%</div>
              </div>
            </div>
          </div>
          <div
            className="w3-col w3-mobile"
            style={{ width: "20%", marginTop: 10 }}
          >
            <div className="resultImage">
              <img
                alt="studentimage"
                src={shuvodip}
                className="studentImage"
              ></img>
              <div className="resultOverlay">
                <div className="w3-large">Shuvodip Basak</div>
                <div className="w3-small">IMT Percentage - 86%</div>
                <div className="w3-small">H.S Percentage - 91%</div>
              </div>
            </div>
          </div>
          <div
            className="w3-col w3-mobile"
            style={{ width: "20%", marginTop: 10 }}
          >
            <div className="resultImage">
              <img
                alt="studentimage"
                src={rajdep}
                className="studentImage"
              ></img>
              <div className="resultOverlay">
                <div className="w3-large">Rajdeep Basak</div>
                <div className="w3-small">IMT Percentage - 68%</div>
                <div className="w3-small">H.S Percentage - 87.4%</div>
              </div>
            </div>
          </div>
          <div
            className="w3-col w3-mobile"
            style={{ width: "20%", marginTop: 10 }}
          >
            <div className="resultImage">
              <img
                alt="studentimage"
                src={sayantan}
                className="studentImage"
              ></img>
              <div className="resultOverlay">
                <div className="w3-large">Sayantan Paul</div>
                <div className="w3-small">IMT Percentage - 66%</div>
                <div className="w3-small">H.S Percentage - 85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
