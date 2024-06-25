import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { MDBIcon } from "mdbreact"; // Import MDBIcon component
import "../../App.css"; // Import custom CSS file

function Navbar() {
  return (
    <>
      <div className="navbar-top">
        <div className="marquee">
          <div className="marquee-content">
            <p>NOW LIVE | Get Free Cotton Tote Bag On Order Above ₹ 2100 | Free Shipping On All Orders Above ₹ 350</p>
          </div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">➔</button>
        </div>

        <div className="logo-container">
          <h1 className="logo">PHOOL</h1>
          <p className="tagline">MADE FROM TEMPLE FLOWERS</p>
        </div>

        <div>
          <Nav className="ml-auto">
            <LinkContainer to="/wishlist">
              <Nav.Link>
                <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <MDBIcon className="me-2 mdb-icon" icon="user" size="lg" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>
                <MDBIcon className="me-2 mdb-icon" icon="sign-in-alt" size="lg" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </div>

      <Navbar expand="lg" className="custom-navbar" variant="light">
        <Container className="justify-content-center">
          <Navbar.Brand href="/"><b>Unknown Gamer</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <NavDropdown title={<span>Category</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar;