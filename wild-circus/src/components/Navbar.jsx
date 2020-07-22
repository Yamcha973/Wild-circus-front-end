import React from 'react';
import '../Style/Navbar.css';


function Navbar() {
    return (
            <div className="navbar">
        <div className="button">
        <h1>WILD CIRCUS</h1>
                <button className="button">Performances</button>
                <button className="button">About us</button>
                <button className="button">Contact</button>
                <button className="button">Book a ticket</button>
            </div>
            </div>
    )
}




export default Navbar;