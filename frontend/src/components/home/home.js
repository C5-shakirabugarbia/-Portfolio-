import "./style.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Accordion,
  Tab,
  Col,
  Row,
  Tabs,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import Image from "react-bootstrap/Image";
import img from "../../../src/img/shakir.jpg";
import back from "../../../src/img/bake.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvfr5sn",
        "template_lzeisgq",
        form.current,
        "nQqCCfeNSMesYnqNm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="home" id="home"></div>
      <div id="about">
        <div className="about">
          <div className="aboutt">
            <p>About me</p>
          </div>
          <div className="photoP">
            <div className="test div">
              <img src={img} className="img" />
            </div>
            <div className="pd">
              <p>
                Six months ago, I made the decision to start a career as a web
                developer and since then I have been doing my best, leaving my
                original education behind to follow my passion. Six months of
                hard work in an intense training Bootcamp, building full-stack
                Apps, being more than ready to move to the next step seeking a
                new opportunity to prove myself and to gain new skills
              </p>
            </div>
          </div>
          <div className="profileE">
            <div className="tab">
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Skills">
                  - JavaScript,HTML5,CSS3,DOM Manipulation , jQuery <br />
                  - Backend Development ( Node JS, Express JS, Mongoose, SQL )
                  <br />
                  - Databases: Relational (MySQL) , Non-Relational (MongoDB)
                  <br />
                  - Frontend Development (React, Redux)
                  <br />
                  -Familiar with Git, Github, MVC working with agile methodology
                </Tab>
                <Tab eventKey="profile" title="Education">
                  {" "}
                  <h3>- Meraki Academy</h3>{" "}
                  <p>
                    Six months of intensive training at Meraki Academy Bootcamp
                    for Web Development
                  </p>{" "}
                  <h3>- Al-Balqa Applied University </h3>
                  <p>
                    Bachelor's Degree in Mechanical engineering 2019 with a GPA
                    of 2.89
                  </p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div className="Project" id="project">
        <Container>
          <Row>
            <p>
              <h1>My Latest Projects</h1>
            </p>
          </Row>
          <Row>
            <Col className="col" md={4}>
              <p>
                <>
                  {["Dark"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Link
                        className="de"
                        href="https://github.com/C5-shakirabugarbia/MERAKI_Academy_Project_4"
                        target="_blank"
                      >
                        <Card.Body className="ef">
                          <Card.Title> Carrot Store </Card.Title>
                          <Card.Text>
                            solo project was done using:
                            <br /> - Database : Non-Relational (MongoDB)
                            <br /> - Backend Development ( Node JS, Express JS,
                            Mongoose ) <br /> - Frontend Development (React:
                            react hooks useState, useContext, useEffect)
                          </Card.Text>
                        </Card.Body>
                      </Card.Link>
                    </Card>
                  ))}
                </>
              </p>
            </Col>
            <Col className="col" md={4}>
              <p>
                <>
                  {["Dark"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Link
                        href="https://bigbiteproject.netlify.app/"
                        target="_blank"
                        className="de"
                      >
                        <Card.Body className="ef">
                          <Card.Title> BigBite </Card.Title>
                          <Card.Text>
                            The teamwork project was done using : <br /> -
                            Database: Relational (MySQL) <br /> - Backend
                            Development ( Node JS, Express JS, SQL ) <br />-
                            Frontend Development (React, Redux: store, initial
                            states)
                          </Card.Text>
                        </Card.Body>
                      </Card.Link>
                    </Card>
                  ))}
                </>
              </p>
            </Col>
            <Col className="col" md={4}>
              <p>
                <>
                  {["Dark"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Link
                        href="https://ag-movie.netlify.app/"
                        target="_blank"
                        className="de"
                      >
                        <Card.Body className="ef">
                          <Card.Title> Ag Movie App </Card.Title>
                          <Card.Text>
                            A simple task was done using React, bootstrap, and
                            API to display a list of movies and add and delete
                            them from the favorites list.
                          </Card.Text>
                        </Card.Body>
                      </Card.Link>
                    </Card>
                  ))}
                </>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="HireMe" id="contact">
        <div className="u">
          <h1>Hire Me.</h1>

          <p>
            I am available for full time, part time and freelance work. Connect
            with me via email: <a className="a">shakir.abugarbia@gmail.com</a>
          </p>
        </div>
        <div className="rec">
          <h2>receive my cv</h2>
        </div>
        <div className="fo">
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col>
                <Form.Control placeholder="name" name="to_name" />
              </Col>
              <Col>
                <Form.Control placeholder="email" name="email" />
              </Col>
            </Row>
            <p></p>
            <Row>
              <Col>
                <input type="submit" value="Submit" className="sub" />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="footer">
        {" "}
        <Navbar.Brand href="#home">Shakir Abugarbia</Navbar.Brand>
        <Nav>
          <Nav.Link href="https://github.com/shakirabugarbia" target="_blank">
            <GoMarkGithub size={30} />
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="https://www.linkedin.com/in/shakir-abugarbia/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};
export default Home;
