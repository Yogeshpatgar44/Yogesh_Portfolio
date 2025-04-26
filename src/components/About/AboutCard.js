import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yogesh Shivanand Patgar </span>
            from <span className="purple"> Managalore, India.</span>
            <br />
            I am currently Working at RDL technology as a Full Stack Developer Intern.
            <br />
            I have recently graduated from Sahyadri College of Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games &nbsp;&nbsp; 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness and Gym 💪🏻
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Musics 🎧
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
