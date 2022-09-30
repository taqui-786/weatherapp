import React from "react";
import { useState } from "react";
import { WiDaySunnyOvercast } from 'react-icons/wi';
import {NavLink} from 'react-router-dom'
function Navbar(){
const [Nav,setNav] = useState(false)
    return (
        <>
        <nav className="navbar">
        <div className="max-width">
          <div className="nav-item">
            <div className="logo"><NavLink to="/" > <span><WiDaySunnyOvercast/></span> TaquiWeather</NavLink></div>
            <div className= "list">
              <ul>
                <li><NavLink  to="/about"  activeclassname="activeBTN">About</NavLink></li>
                <li> <NavLink  to="/contact" activeclassname="activeBTN" >Contact</NavLink></li>
                <li><NavLink   to="/weather" activeclassname="activeBTN" >Weather</NavLink></li>
              </ul>
              <div className="nav-btn" onClick={() =>{ setNav(!Nav)}}>※</div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="nav-slide" id="navslide">
        <ul>
                <li><NavLink  to="/about"  activeclassname="activeBTN">About</NavLink></li>
                <li> <NavLink  to="/contact" activeclassname="activeBTN" >Contact</NavLink></li>
                <li><NavLink   to="/weather" activeclassname="activeBTN" >Weather</NavLink></li>
        </ul>
      </div> */}
        </>
    )
}
export default Navbar;