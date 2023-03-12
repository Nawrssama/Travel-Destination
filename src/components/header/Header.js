import React from "react";
import '../header/Header.css';
import Navbar from "../Navbar/Navbar";

function Header(){
    return (
        <div className="head">
            <h1 className="Hstr">welcome to my travel app</h1>
            <Navbar />
        </div>
    )
}

export default Header;