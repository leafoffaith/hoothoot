import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigationbar.css"

function Navigationbar() {
  return (
    <>
    <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">HootHoot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Podcasts</Nav.Link>
            <Nav.Link href="/">Episodes</Nav.Link>
            <Nav.Link href="/">Categories</Nav.Link>
            <Nav.Link href="/">Discover</Nav.Link>
            <Nav.Link href="/">I'm Feeling Lucky</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

//TBC - to add routing and styling

export default Navigationbar;
