import React, { Component } from "react";
import "./App.css";
import Cover from "./Cover/Cover";
import Courses from "./Courses/Courses";
import Teachers from "./Teachers/Teachers";
import Results from "./Results/Results";
import Gallery from "./Gallery/Gallery.jsx";
import Schedule from "./Schedule/Schedule";
import Footer from "./Footer/Footer";

export class App extends Component {
  handleNavItemClick = navItem => {
    let yPos =
      navItem === "Courses"
        ? document.getElementById("course").offsetTop
        : navItem === "Teachers"
        ? document.getElementById("teachers").offsetTop
        : navItem === "Results"
        ? document.getElementById("results").offsetTop
        : navItem === "Gallery"
        ? document.getElementById("gallery").offsetTop
        : navItem === "Schedule"
        ? document.getElementById("schedule").offsetTop
        : 0;
    window.scrollTo(0, yPos);
  };
  render() {
    return (
      <div className="App">
        <Cover navItemClicked={this.handleNavItemClick} />
        <div id="course">
          <Courses />
        </div>
        <div id="teachers">
          <Teachers />
        </div>
        <div id="results">
          <Results />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
