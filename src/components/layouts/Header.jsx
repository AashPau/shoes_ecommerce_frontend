import Container from "react-bootstrap/Container";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

const navTopics = [
  "WOMENS",
  "MENS",
  "KIDS",
  "SPORTS",
  "FITNESS",
  "FANGEAR",
  "BRANDS",
  "SALE",
];
export const Header = () => {
  return (
    <Navbar
      expand="md"
      className="d-flex align-items-baseline px-3 gap-3 roboto-condensed-font "
    >
      <Link className="navbar-brand" to="/">
        Footwear
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto flex-fill">
          {navTopics.map((topic, i) => {
            return (
              <Link className="nav-link" key={i} to="/">
                {topic}
              </Link>
            );
          })}
          {/* <Link className="nav-link" to="/">
              <i className="fa-solid fa-house"></i> WOMENS
            </Link>
            <Link className="nav-link" to="/signin">
              <i className="fa-regular fa-user"></i> MENS
            </Link>
            <Link className="nav-link" to="/signup">
              <i className="fa-solid fa-right-to-bracket"></i> KIDS
            </Link> */}
        </Nav>
      </Navbar.Collapse>
      <InputGroup className="mb-3 border rounded">
        <Form.Control
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
          className="border-0"
        />
        <Button
          variant="outline-none"
          id="button-addon2"
          className="rounded-circle border-0"
        >
          <FiSearch />
        </Button>
      </InputGroup>
      <Navbar.Collapse>
        <Nav>
          <Link className="nav-link fs-3">
            <ImLocation />
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link fs-3">
            <GiShoppingBag />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
