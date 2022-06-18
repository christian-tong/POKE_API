import React from "react";

import "./Navbar.css";

/**
 * It returns a nav element with an image element inside of it.
 * @returns A nav element with an image inside of it.
 */
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
