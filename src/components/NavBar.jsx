import React from "react";
import Icons from "./Icons";
import {faUser,faCartPlus} from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    return (
        <nav style={{backgroundColor: "#39AEA9"}} className="navbar navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Nam Pharmacy</span>
          
          <span>
              <span style={{marginLeft: "20px"}}><a href="#"><Icons icone={faUser} /></a></span>
            
              <span style={{marginLeft: "20px"}}><a href="#"><Icons icone={faCartPlus} /></a></span>
          </span>
        </div>
      </nav>
        
    );
}

export default NavBar;