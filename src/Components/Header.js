import React from "react";
import './Header.css'
import { NavLink} from "react-router-dom"

function Header() {
    return(
        <div className="container-fluid header-container-part">
           <div className="header-part">
               <ul>
                   <li>
                       <NavLink to="/" style={({isActive})=>{return{color: isActive ? '#9b59b6': ''}}}>Form</NavLink>
                   </li>
                   <li >
                       <NavLink to="/table" style={({isActive})=>{return{color: isActive ? '#9b59b6': ''}}}>Table</NavLink>
                   </li>
               </ul>
           </div>
        </div>
    )
}

 export default Header;