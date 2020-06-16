import React from "react";
// import { logDOM } from "@testing-library/react";
import logo from "../logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link }from "react-router-dom";

function NavBar(){

  const nav_bar={
    border: "1px solid blue",
    height: "3em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    postion:"fixed",
  }
  const logoStyle={
    width:"50px",
    height:"50px",
    marginLeft:"3px",
  }
  const fontStyle={
    width:"30px",
    height:"30px",
   
  }
    return(
     <nav style={nav_bar}>
        <span>
          <img src={logo} style={logoStyle} alt=""/>
        </span>
        <span>
          <Link to="/">HOME</Link>
        </span>
        <span>
          <Link to="/calculator">Calculator</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/feeds">FEEDS</Link>
        </span>
        <FontAwesomeIcon icon={faBars} style={fontStyle} />
        
     
     </nav>
       
    )
}
export default NavBar