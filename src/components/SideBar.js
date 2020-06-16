import React from "react";

function SideBar(){
  const side_bar={
    display: "none",
    height: "800px",
    width: "300px",
    border: "1px solid",
    position: "fixed",
    zIndex:"2",
    top: "0",
    left: "0",
    backgroundColor: "whitesmoke",
  }
    return(
     <div className="side_bar" style={side_bar}>this is the side</div>
       
    )
}
export default SideBar