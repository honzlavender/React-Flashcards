import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" style={{textDecoration: "none"}}>

    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <h1 className="display-4">Flashcard-o-matic</h1>
        <p className="lead">Discover The Flashcard Difference.</p>
      </div>
    </header>
    </Link>

  );
}

export default Header;
