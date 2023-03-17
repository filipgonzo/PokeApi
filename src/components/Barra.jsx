import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";


const Barra = () => {
  return (
    <Navbar className="fondo" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
        <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav>

            <NavLink
              className={({ isActive }) =>
                (isActive ? "viewActiva" : "view") } to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "viewActiva" : "view") } to="/Pokemones">
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); 
};

export default Barra;
