import React from 'react'
import "../style/Myhead.css"
import { NavLink } from 'react-router-dom'
function Myheading() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}

export default Myheading