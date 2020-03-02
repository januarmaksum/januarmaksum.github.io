import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>TodoList App</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  textAlign: "center"
};

export default Header;
