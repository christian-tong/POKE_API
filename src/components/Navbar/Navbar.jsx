import React from "react";

import "./Navbar.css";

// LOGO Y ESTIL0
function Navbar() {
  const URL_LOGO =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <img className="nav_logo" src={URL_LOGO} alt="pokeapi_logo" />
    </nav>
  );
}

export default Navbar;
