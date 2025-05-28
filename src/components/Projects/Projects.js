import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PMS from "../../Assets/Projects/PMS.jpg"
import VMS from "../../Assets/Projects/VMS.jpg"
import Banking from "../../Assets/Projects/Banking.jpg"
import Plant_AI from "../../Assets/Projects/plant_ai.jpg"
import Telimedi_connect from "../../Assets/Projects/Telimedi_connect.png"
import Portfolio from "../../Assets/Projects/Portfolio.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Telimedi_connect}
              isBlog={false}
              title="Telimedi-Connect"
              description="A healthcare platform for booking regular or emergency doctor appointments, built with React.js, Material-UI, Node.js, Express, and MongoDB. Offers features like patient registration, appointment scheduling, doctor listings, and secure health data management to enhance modern healthcare delivery."
              ghLink="https://github.com/Yogeshpatgar44/Doctor-Appointment-System"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Plant_AI}
              isBlog={false}
              title="Plant AI"
              description="A plant disease detection system built with Python, TensorFlow, and image processing libraries. Utilizes AI to identify plant diseases, helping farmers improve crop yield and reduce pesticide use by accurately diagnosing plant health from images."
              ghLink="https://github.com/Yogeshpatgar44/Plant-AI"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banking}
              isBlog={false}
              title="Net-Banking Management System"
              description="Secure and user-friendly digital banking solution built with HTML, CSS, PHP, and MySQL. Provides core banking features such as account management, fund transfers, and transaction history, offering users a seamless and efficient online banking experience."
              ghLink="https://github.com/Yogeshpatgar44/Net-Banking-Management-System"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"              
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built with React.js to showcase projects, skills, and experiences. Features include a clean responsive design, project gallery, about me section, and smooth navigation to highlight professional achievements and technical expertise."
              ghLink="https://github.com/Yogeshpatgar44/Yogesh_Portfolio"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PMS}
              isBlog={false}
              title="Project Management System"
              description="A collaborative platform for teams to manage projects efficiently, built with React.js, Material-UI, Node.js, Express, and MongoDB. Includes features such as task assignment, progress tracking, team collaboration, and real-time updates to streamline workflow and boost productivity.."
              ghLink="https://github.com/RDL-Pvt-Ltd/RDL_PMS/tree/main"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VMS}
              isBlog={false}
              title="Visitor Management System"
              description="A smart system to manage and track visitors in real-time, built with React.js, Material-UI, Node.js, Express, and MongoDB. Features include visitor registration, check-in/check-out logging, admin dashboard, and secure data storage to ensure smooth and organized visitor handling."
              ghLink="https://github.com/RDL-FULLSTACK/VMS"
              demoLink="https://yogeshpatgar44.github.io/Deployment/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
