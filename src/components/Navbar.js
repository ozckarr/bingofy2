import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Hem
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
