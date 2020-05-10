import React, { Component } from "react";
import "./TeacherDetails.css";

export class TeacherDetails extends Component {
  render() {
    return (
      <div className="w3-animate-left" key={this.props.teacherId}>
        <img
          alt="teacher"
          src={this.props.teacherImage}
          className="teacherImage w3-circle"
        ></img>
        <div className="teacherDescription">
          {this.props.teacherDescription}
        </div>
        <div className="teacherName">{this.props.teacherName}</div>
        <div className="teacherDesignation">
          {this.props.teacherDesignation}
        </div>
      </div>
    );
  }
}

export default TeacherDetails;
