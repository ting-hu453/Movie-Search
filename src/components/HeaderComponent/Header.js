import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <span>
        <Link to="/">Home</Link>
      </span>
    </div>
  );
};

export default Header;
