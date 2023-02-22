import React from "react"
import "./navbar.css"
import logo from "../../assets/logo.svg"

function Navbar() {
    return (
        <div className="navbar section">
            <div className="navbar__container">
                <div className="navbar__container-logo">
                    <img src={logo} />
                </div>
                <div className="navbar__container-nav">
                    <a href="#">Home</a>
                    <a href="#">What is GPT?</a>
                    <a href="#">Open AI</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Library</a>
                </div>
            </div>
            <div className="navbar__container-sign">
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
