import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  return (
    <nav>
      <h2>
        <Link to="/home">
          <img src={logo} alt="mythology" width="150" height="auto" />
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/">
            <button type="button" className="btn btn-warning">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
