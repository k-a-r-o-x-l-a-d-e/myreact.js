import React from "react";
import { Link } from "react-router-dom";
import { Route, BrowserRouter as Router} from "react-router-dom";

function Calculator(){
    const Calculator_style={
        width: "500px",
        height: "500px",
        /* border: 1px solid green; */
        backgroundImage: "url(tt.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "500px 500px",
        borderRadius: "10px",
        border: "1px solid",
        boxShadow: "5px 10px #888888",
        marginBottom: "auto",
        marginTop: "auto",
    }
    return(
     <div style={Calculator_style}>
         <Link to="/users/1">user1</Link>
         <Link to="/">user2</Link>
         <Link to="/">user3</Link>
        <Route path="/users/:id" component={user}/>


     </div>
     
    )
}
export default Calculator