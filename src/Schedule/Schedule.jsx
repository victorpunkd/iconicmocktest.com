import React, { Component } from "react";
import "./Schedule.css";
//import { RoutineCard } from "../RoutineCard/RoutineCard";

export class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      routine: [
        {
          date: "13th January 2020",
          subject: "Bengali"
        },
        {
          date: "14th January 2020",
          subject: "English"
        },
        {
          date: "15th January 2020",
          subject: "Biology/Statistics/Geography"
        },
        {
          date: "17th January 2020",
          subject: "Physics/Nutrition"
        },
        {
          date: "18th January 2020",
          subject: "Chemistry/Economics"
        },
        {
          date: "20th January 2020",
          subject: "Math/Psychology"
        },
        {
          date: "21st January 2020",
          subject: "Computer Application/Computer Science/Environmental Science"
        }
      ]
    };
  }

  render() {
    return (
      <div className="scheduleContainer">
        <div className="heading">Exam Schedule</div>
        <div className="headingDescription">
          All our exam schedule will be published here
        </div>
        <div style={{ marginTop: "2%" }}>
          <div className="w3-text-grey w3-xxlarge">
            Check this space for future exam schedules
          </div>
        </div>
        {/*<div className="scheduleTable">
          <table class="w3-table-all w3-card-4 w3-centered">
            <tr>
              <th>Date</th>
              <th>Subject</th>
            </tr>
            {this.state.routine.map(routine => (
              <tr>
                <td>{routine.date}</td>
                <td>{routine.subject}</td>
              </tr>
            ))}
          </table>
        </div>*/}
        {/*
        <div className="expect">Expected Date of Exam</div>
        <div className="examDate">2nd Week of January 2019</div>
        <div className="watch">
          <i class="fa fa-info-circle" aria-hidden="true"></i> Watch This Space
          to Know More
        </div>*/}
      </div>
    );
  }
}

export default Schedule;
