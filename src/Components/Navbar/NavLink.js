import React from "react";

const NavLink = props => (

  <li className="nav-item">
    <a className="nav-link" id={props.name} onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>{props.name}</a>
  </li>

)
  
export default NavLink;