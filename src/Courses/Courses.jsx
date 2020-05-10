import React, { Component } from "react";
import "./Courses.css";
import physics from "./physics.jpg";
import chemistry from "./chemistry.jpg";
import biology from "./biology.jpg";
import math from "./math.jpg";
import geography from "./geography.jpg";
import economics from "./economics.jpg";
import statistics from "./statistics.jpg";
import computerApplication from "./computerScience.jpg";
import english from "./english.jpg";
import bengali from "./bengali.png";
import computerScience from "./computerApplication.jpg";
import psychology from "./psychology.jpg";
import nutrition from "./nutrition.jpg";
import environment from "./environment.jpg";

export class Courses extends Component {
  render() {
    return (
      <div className="coursesContainer">
        <div className="heading">Courses</div>
        <div className="headingDescription">
          We offer these exams, and we are specialized in these subjects
        </div>
        <div className="courses">
          <div className="w3-row">
            <div className="w3-quarter courseCard">
              <img alt="Physics" className="courseImages" src={physics}></img>
              <div className="courseName">Physics</div>
              <div className="courseDescription">
                For all the board exams including entrance exams
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Chemistry"
                className="courseImages"
                src={chemistry}
              ></img>
              <div className="courseName">Chemistry</div>
              <div className="courseDescription">
                For both the entrance exams medical, engineering and boards
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img alt="Biology" className="courseImages" src={biology}></img>
              <div className="courseName">Biology</div>
              <div className="courseDescription">
                For medical entrance and borad exams
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img alt="Mathematics" className="courseImages" src={math}></img>
              <div className="courseName">Mathematics</div>
              <div className="courseDescription">
                For board exams and engineering entrance exams all over India
              </div>
            </div>
          </div>
          <div className="w3-row" style={{ marginTop: "2%" }}>
            <div className="w3-quarter courseCard">
              <img
                alt="Geography"
                className="courseImages"
                src={geography}
              ></img>
              <div className="courseName">Geography</div>
              <div className="courseDescription">
                For all the board exams state and central
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Economics"
                className="courseImages"
                src={economics}
              ></img>
              <div className="courseName">Economics</div>
              <div className="courseDescription">
                For both english and bengali mediums
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Statistics"
                className="courseImages"
                src={statistics}
              ></img>
              <div className="courseName">Statistics</div>
              <div className="courseDescription">
                For board exams in class XII
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Statistics"
                className="courseImages"
                src={computerScience}
              ></img>
              <div className="courseName">Computer Science</div>
              <div className="courseDescription">
                For board exams including additional subjects in class X
              </div>
            </div>
          </div>
          <div className="w3-row" style={{ marginTop: "2%" }}>
            <div className="w3-quarter courseCard">
              <img alt="English" className="courseImages" src={english}></img>
              <div className="courseName">English</div>
              <div className="courseDescription">
                For both the first and second language
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img alt="Bengali" className="courseImages" src={bengali}></img>
              <div className="courseName">Bengali</div>
              <div className="courseDescription">
                For both the bengali and english medium boards
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Computer Application"
                className="courseImages"
                src={computerApplication}
              ></img>
              <div className="courseName">Computer Application</div>
              <div className="courseDescription">
                For additional subjects in class X and class XII
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Psychology"
                className="courseImages"
                src={psychology}
              ></img>
              <div className="courseName">Psychology</div>
              <div className="courseDescription">
                For all the borad exams of class XII
              </div>
            </div>
          </div>
          <div className="w3-row" style={{ marginTop: "2%" }}>
            <div className="w3-quarter courseCard">&nbsp;</div>
            <div className="w3-quarter courseCard">
              <img
                alt="Nutrition"
                className="courseImages"
                src={nutrition}
              ></img>
              <div className="courseName">Nutrition</div>
              <div className="courseDescription">
                For all the central boards
              </div>
            </div>
            <div className="w3-quarter courseCard">
              <img
                alt="Environmental Science"
                className="courseImages"
                src={environment}
              ></img>
              <div className="courseName">Environmental Science</div>
              <div className="courseDescription">
                For all the state and central board exams
              </div>
            </div>
            <div className="w3-quarter courseCard"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
