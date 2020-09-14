import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Mythology</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addProduct">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
