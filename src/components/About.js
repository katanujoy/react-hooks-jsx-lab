import React from "react";
import { image } from "../data/data"; // Make sure this matches your data.js export

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love learning React and building cool stuff!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
