import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">RecipeApp</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/create">Create Recipe</a></li>
            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

