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
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img from "../../../src/img/shakir.jpg";
const Home = () => {
  return (
    <>
      <div className="home" id="home"></div>
      <div id="about">
        <div className="about">
          <div className="aboutt">
            <h1>About me</h1>
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
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Skills">
                - JavaScript,HTML5,CSS3,DOM Manipulation , jQuery Backend
                <br />
                - Development ( Node JS, Express JS, Mongoose, SQL ) Databases:
                <br />
                - Relational (MySQL) , Non-Relational (MongoDB) Frontend
                <br />
                - Development (React, Redux) Familiar with Git, Github, MVC
                <br />- working with agile methodology
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
                  Bachelor's Degree in Mechanical engineering 2019 with a GPA of
                  2.89
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
