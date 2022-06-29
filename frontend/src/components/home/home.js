import "./style.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Accordion,
} from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="home" id="home"></div>
      <div id="about">
        <div>
          <h1>About me</h1>
        </div>
        <div className="photoP"></div>
        <div className="profileE">
          <Accordion className="aa">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Life Changing</Accordion.Header>
              <Accordion.Body>
                Six months ago, I made the decision to start a career as a web
                developer and since then I have been doing my best, leaving my
                original education behind for my passion.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Education</Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Home;
