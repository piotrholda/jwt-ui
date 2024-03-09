import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <Navbar>
      <Container>
        <NavbarBrand href="#">JWT UI</NavbarBrand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
