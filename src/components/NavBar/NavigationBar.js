import React from 'react'
import classes from "./Navbar.module.css";
import {
  BrowserRouter as Router, Link,
} from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/aboutme">About me</Link>
          </li>
          <li>
          <Link to="/skills">Skills</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}
