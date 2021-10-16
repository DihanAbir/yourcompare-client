import React from 'react'

import "animate.css";

// image
import group1 from "../../accets/Group 1907.svg";
import group2 from "../../accets/Group 2005.svg";
import group3 from "../../accets/Group 2751.svg";
import store from "../../accets/Image 7.png";

const methodology = {
  margin: "8rem 0",
  textAlign: "center",
  padding: "2rem 3rem",
};
const methodStyle = { display: "flex", justifyContent: "space-around" };
const stepStyle = { width: "250px", padding: "30px 30px 0px 0px " };
const community = { ...methodology };
const getApp = { marginTop: "8rem", maxWidth: "400px" };

const steps = [
  {
    title: "Enter Details",
    description:
      "Answer a few simple question, so the program could generate a custom quote for you.",
    image: group1,
  },
  {
    title: "Compare",
    description: "View the quotes, compare them and choose the best deal.",
    image: group2,
  },
  {
    title: "Buy Online",
    description:
      "Get instant insurance from the company of your choice through us.",
    image: group3,
  },
];


export default function Showcase() {
  return (
    <React.Fragment>
      <div style={methodology}>
        <h1>How does it work?</h1>
        <p className="pera">
          Complete 3 simple steps to find the best insurance plan for your or
          your family!
        </p>
        <div style={methodStyle}>
          {steps.map((step, i) => (
            <div className="step" style={stepStyle} key={i}>
              <img src={step.image} alt="Step Logo" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="p5" style={community}>
        <h1>1000+ people believed in us.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          finibus sapien lorem, molestie dictum urna accumsan sit amet.
        </p>
      </div>

      {/* Get the app */}
      <div className="store">
        <div
          className="animate__animated animate__bounce animate__bounceInLeft"
          style={getApp}
        >
          <h1 style={{ marginBottom: "0px" }}>Get the</h1>
          <h1 style={{ marginTop: "0px" }}> youcompare app</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            finibus sapien lorem, molestie dictum urna accumsan sit amet.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <img src={store} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}