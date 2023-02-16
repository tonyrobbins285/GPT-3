import React from "react"
import "./navbar.css"
import logo from "../../assets/logo.svg"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} />
                </div>
                <ul className="navbar__ul">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>What is GPT?</li>
                    </a>
                    <a href="#">
                        <li>Open AI</li>
                    </a>
                    <a href="#">
                        <li>Case Studies</li>
                    </a>
                    <a href="#">
                        <li>Library</li>
                    </a>
                </ul>
            </div>
            <div className="navbar__sign">
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
