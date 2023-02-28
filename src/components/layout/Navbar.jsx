import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/costs_logo.png";
import styles from "./Navbar.module.css";

import Container from "./Container";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logotipo do Site" />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.item}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.item}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/company" className={styles.item}>
              Empresa
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.item}>
              Contato
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
