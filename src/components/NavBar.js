import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>/*{code here}*/       <NavLink exact to="/movies" activeClassName="active">Movies</NavLink>
  <NavLink exact to="/directors" activeClassName="active">Directors</NavLink>
  <NavLink exact to="/actors" activeClassName="active">Actors</NavLink>
  <NavLink exact to="/" activeClassName="active">Home</NavLink>
   </div>;
}

export default NavBar;
