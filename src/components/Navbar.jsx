import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 border">
      <div className="container-fluid d-flex justify-content-around">
        <span className="navbar-brand mb-0 mx-5 h1">Studio Ghibli 
        <Link to="/" className="btn btn-outline-primary mx-5">Home</Link>
        <Link to="/films" className="btn btn-outline-primary mx-5">Films</Link>
        <Link to="/people" className="btn btn-outline-primary mx-5">People</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;