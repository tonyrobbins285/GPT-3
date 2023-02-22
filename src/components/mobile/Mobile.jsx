import React, { useState } from "react"
import { RiCloseLine, RiMenu3Line } from "react-icons/ri"
import "./mobile.css"
function Mobile() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            {toggleMenu && <div className="overlay"></div>}

            <div className="mobile--hamburger">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu((toggle) => !toggle)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu((toggle) => !toggle)}
                    />
                )}
            </div>
            {toggleMenu && (
                <div className="mobile__nav">
                    <a href="#">Home</a>
                    <a href="#">What is GPT?</a>
                    <a href="#">Open AI</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Library</a>
                    <a href="#">Sign In</a>
                    <a href="#">Sign Up</a>
                </div>
            )}
        </>
    )
}

export default Mobile
