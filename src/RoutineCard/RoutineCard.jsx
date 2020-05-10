import React, { Component } from "react";
import "./RoutineCard.css";

export class RoutineCard extends Component {
  render() {
    return (
      <div className="routineCard">
        <div className="w3-row w3-border-bottom">
          <div className="w3-half w3-border-right w3-border-black">
            13th January 2019
          </div>
          <div className="w3-half  w3-border-left w3-border-black">Bengali</div>
        </div>
      </div>
    );
  }
}

export default RoutineCard;
