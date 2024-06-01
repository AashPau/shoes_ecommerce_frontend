import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to="/">
          Footwear
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link className="nav-link" to="/signin">
              <i className="fa-regular fa-user"></i> Log In
            </Link>
            <Link className="nav-link" to="/signup">
              <i className="fa-solid fa-right-to-bracket"></i> Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
