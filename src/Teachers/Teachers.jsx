import React, { Component } from "react";
import "./Teachers.css";
import { TeacherDetails } from "../TeacherDetails/TeacherDetails";
export class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      teacher: [
        {
          id: 1,
          name: "Niladri Saha",
          picture:
            "https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/images/niladri.jpeg",
          subject: "Biology",
          description:
            "Niladri has MSC degree in Botany and he is very specialized in his subject"
        },
        {
          id: 2,
          name: "Samrat Mukherjee",
          picture:
            "https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/images/samrat.jpeg",
          subject: "Physics",
          description: "Physics Teacher"
        },
        {
          id: 3,
          name: "Asim Roy Chowdhury",
          picture:
            "https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/images/asim.jpeg",
          subject: "Mathematics",
          description: "Mathematics Teacher "
        },
        {
          id: 4,
          name: "Ranadeep Basak",
          picture:
            "https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/images/ranadip.jpeg",
          subject: "Chemistry",
          description: "Chemistry Teacher"
        }
      ],
      currentTeacherIndex: 0
    };
    this.touchStartEndAxisDifferenc = 0;
  }

  handleLeftArrowClick = () => {
    this.setState({
      currentTeacherIndex:
        this.state.currentTeacherIndex !== 0
          ? this.state.currentTeacherIndex - 1
          : this.state.teacher.length - 1
    });
  };

  handleRightArrowClick = () => {
    this.setState({
      currentTeacherIndex:
        this.state.currentTeacherIndex !== this.state.teacher.length - 1
          ? this.state.currentTeacherIndex + 1
          : 0
    });
  };

  hanldeTouchStart = e => {
    this.touchStartEndAxisDifference = e.touches[0].clientX;
  };

  hanldeTouchEnd = e => {
    if (this.touchStartEndAxisDifference - e.changedTouches[0].clientX > 0)
      this.handleLeftArrowClick();
    else this.handleRightArrowClick();
  };

  render() {
    return (
      <div className="teachersContainer">
        {console.log(this.state.currentTeacherIndex)}
        <div className="heading">Teachers</div>
        <div className="headingDescription">
          Our teachers are best in their respective subjects, and they take
          utmost care while teaching
        </div>
        <div className="w3-row" style={{ marginTop: 30 }}>
          <div className="w3-quarter w3-hide-small">
            <i
              onClick={this.handleLeftArrowClick}
              class="fa fa-angle-left arrowIcon"
            ></i>
          </div>
          <div
            className="w3-half"
            onTouchStart={e => {
              this.hanldeTouchStart(e);
            }}
            onTouchEndCapture={e => {
              this.hanldeTouchEnd(e);
            }}
          >
            <TeacherDetails
              teacherId={this.state.teacher[this.state.currentTeacherIndex].id}
              teacherImage={
                this.state.teacher[this.state.currentTeacherIndex].picture
              }
              teacherDescription={
                this.state.teacher[this.state.currentTeacherIndex].description
              }
              teacherName={
                this.state.teacher[this.state.currentTeacherIndex].name
              }
              teacherDesignation={
                this.state.teacher[this.state.currentTeacherIndex].subject
              }
            />
          </div>

          <div className="w3-quarter w3-hide-small">
            <i
              onClick={this.handleRightArrowClick}
              class="fa fa-angle-right arrowIcon"
            ></i>
          </div>
        </div>
        <div className="w3-hide-large w3-text-gray" style={{ marginTop: 20 }}>
          <i class="fa fa-angle-double-left"></i> Swipe <strong>Left</strong> or
          <strong> Right</strong> to see more{" "}
          <i class="fa fa-angle-double-right"></i>
          <div style={{ marginTop: 5 }} className="slideAnimation">
            <i class="w3-xlarge fa fa-hand-o-up"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers;
