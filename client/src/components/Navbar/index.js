import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  const [isNavOpen, navIsOpen] = useState(false); // [value, fn]
  {
    /* <span onClick={() => navIsOpen(false)}>&#10006;</span> */
  }
  return isNavOpen ? (
    <nav className="navbar" onClick={() => navIsOpen(false)}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item-login">
          <Link to="/Login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/Swaddle"> SWADDLE A PENGUIN</Link>
        </li>
        {/* <li className="nav-item">
          {/* if not logged in it askes you to login or register*/}
        {/* <Link to="/Gallery"> GALLERY</Link> */}
        {/* </li> */}
        <li className="nav-item">
          <Link to="/Donate"> DONATE</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <span className="hamburger" onClick={() => navIsOpen(true)}>
      &#9776;
    </span>
  );
}

export default Navbar;
