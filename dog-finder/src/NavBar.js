import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar({dogs}) {
    const navl = dogs.map(dog => (
      <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
        {dog.name}
      </NavLink>
    ));
    
    return (
      <nav>
        <NavLink exact to="/dogs">Home</NavLink>
        {navl}
      </nav>
    );
  }
  
  export default NavBar;