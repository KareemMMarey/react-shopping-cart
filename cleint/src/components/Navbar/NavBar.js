import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../css/Navbar/NavBar.css"
export default function NavBar() {
  return (
    <div className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/orders">Orders</NavLink>
            </li>
            
          </ul>
        </div>
  )
}
