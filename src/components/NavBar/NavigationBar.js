import React from 'react'
import classes from "./Navbar.module.css";

export default function NavigationBar() {
    return (
        <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <a href="../Home/Home">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    )
}
