import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/costs_logo.png";
import "./Navbar.scss";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logotipo do Site" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
