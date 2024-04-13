import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const handleLinkActive = ({ isActive }) => {
    if (isActive) {
      return "active";
    }
    return "";
  };

  //!Link : con esto podemos manejar rutas, sin recargar las paginas nuevamente.
 //!NavLink : con esto podemos manejar rutas activas sin recargar la pagina.


  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary rounded-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${handleLinkActive({ isActive })}`
              }
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${handleLinkActive({ isActive })}`
              }
              aria-current="page"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${handleLinkActive({ isActive })}`
              }
              aria-current="page"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
