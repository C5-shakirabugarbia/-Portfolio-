import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav"
    >
      <Container>
        <Navbar.Brand href="#home">Shakir Abugarbia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
