import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; - 2023
      </p>
    </footer>
  );
};

export default Footer;
