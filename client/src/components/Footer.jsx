import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made by ❤️ with <b>Shrikant</b>.
      </span>
    </footer>
  );
};

export default Footer;
