import React from "react";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Feeds from "./components/Feeds";
import { Route, BrowserRouter as Router} from "react-router-dom";
function App(){

    const appStyle = {
        border: "1px solid",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
    }

    return(
        <div className="app"style={appStyle}>
           <Router> 
                <NavBar/>
                <SideBar />
                <switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/calculator" component={Calculator}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/feeds" component={Feeds}/>


                </switch>
                <Footer/>
            </Router>
        </div>
    )
}
export default App