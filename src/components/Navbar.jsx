import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand-logo">
          👨‍💻 Student Portfolio
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;