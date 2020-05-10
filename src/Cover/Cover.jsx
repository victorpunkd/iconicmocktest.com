import React, { Component } from "react";
import "./Cover.css";
import logo from "./logo.png";

export class Cover extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavShow: false
    };
  }

  handleNavHamburgerClick = () => {
    this.setState({ mobileNavShow: !this.state.mobileNavShow });
  };

  handleMobileNavItemClick = navBarItemClicked => {
    this.setState({ mobileNavShow: !this.state.mobileNavShow });
    this.props.navItemClicked(navBarItemClicked);
  };

  render() {
    return (
      <div className="cover">
        <div className="logoAndContact">
          <span className="contactInfo">
            <span>
              <i class="fa fa-phone contactInfoIcon"></i>
              <span className="contactInfoText">&nbsp;83360 63013</span>
            </span>
            <span style={{ marginLeft: 10 }}>
              <i class="fa fa-envelope contactInfoIcon"></i>
              <span className="contactInfoText">
                &nbsp;iconicmocktest2019@gmail.com
              </span>
            </span>
            <span style={{ marginLeft: 10 }}>
              <i class="fa fa-map-marker contactInfoIcon"></i>
              <span className="contactInfoText">&nbsp;Kolkata</span>
            </span>
          </span>
          <span className="logo">
            <img
              src={logo}
              alt=""
              style={{ width: 60, height: 49, marginTop: -19 }}
            />{" "}
            <span
              style={{
                fontSize: 25,
                fontWeight: 600,
                fontFamily: "Ubuntu, sans-serif"
              }}
            >
              Iconic Mock Test
            </span>
          </span>
          <span className="w3-hide-large w3-animate-zoom hamburgerMenu">
            <i class="fa fa-bars" onClick={this.handleNavHamburgerClick}></i>
          </span>
        </div>
        <div
          className={`w3-hide-large mobileNavBar w3-animate-top ${
            this.state.mobileNavShow ? "" : "w3-hide"
          }`}
        >
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Home")}
          >
            {" "}
            <i class="fa fa-home"></i> Home
          </div>
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Courses")}
          >
            <i class="fa fa-graduation-cap"></i> Courses
          </div>
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Teachers")}
          >
            <i class="fa fa-male"></i> Teachers
          </div>
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Results")}
          >
            <i class="fa fa-clipboard"></i> Results
          </div>
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Gallery")}
          >
            <i class="fa fa-image"></i> Gallery
          </div>
          <div
            className="mobileNavBarItem"
            onClick={() => this.handleMobileNavItemClick("Schedule")}
          >
            <i class="fa fa-calendar"></i> Exam Scedule
          </div>
          <div className="mobileNavBarItem">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://victorsfiles.s3.ap-south-1.amazonaws.com/Iconic/IconicMocktestForm.pdf"
            >
              <i class="fa fa-file"></i> Exam Form
            </a>
          </div>
        </div>
        <div
          className="w3-hide-small"
          style={{ padding: "0% 3%", marginTop: "4%" }}
        >
          <div className="topBar">
            <div>
              <span className="topBarElement active">Home</span>
              <span
                onClick={() => this.props.navItemClicked("Courses")}
                className="topBarElement"
              >
                Courses
              </span>
              <span
                onClick={() => this.props.navItemClicked("Teachers")}
                className="topBarElement"
              >
                Teachers
              </span>
              <span
                onClick={() => this.props.navItemClicked("Results")}
                className="topBarElement"
              >
                Results
              </span>
              <span
                onClick={() => this.props.navItemClicked("Gallery")}
                className="topBarElement"
              >
                Gallery
              </span>
              <span
                onClick={() => this.props.navItemClicked("Schedule")}
                className="topBarElement"
              >
                Exam Schedule
              </span>
              <span className="topBarElement">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/documents/IconicMocktestForm.pdf"
                >
                  Examination Form
                </a>
              </span>
              <div
                className="w3-text-gray w3-xlarge topBarElement"
                style={{ float: "right" }}
              >
                <i class="fa fa-facebook-official"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="coverContent">
          <div className="coverText">Iconic Mock Test</div>
          <div className="coverSecondaryText">
            If you are an aspiring examinee of forthcoming board exams or
            entrance exams then this is the place for you to test your readiness
            before you go for the final act, we are here to test your readiness.
          </div>
          <a
            href="https://iconicmocktestfiles.s3.ap-south-1.amazonaws.com/documents/IconicMocktestForm.pdf"
            className="button w3-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Exam Form
          </a>
        </div>
      </div>
    );
  }
}

export default Cover;
