import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  return (
    <nav>
      <h2>
        <Link to="/home">
          <img src={logo} alt="mythology" width="160" height="auto" />
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
        <li>
          <Link to="/home">
            <button type="button" className="btn btn-warning">
              List Product
            </button>
          </Link>
        </li>
        <li>
          <Link to="/addProduct">
            <button type="button" className="btn btn-warning">
              Add Product
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
