import React from "react"
import blur1 from "../../assets/blur-01.png"
import blur2 from "../../assets/blur-02.png"
import blur3 from "../../assets/blur-03.png"
import "./blurBG.css"

function BlurBG() {
    return (
        <>
            <img className="blurBG blur--1" src={blur1} alt="" />
            <img className="blurBG blur--2" src={blur2} alt="" />
            <img className="blurBG blur--3" src={blur3} alt="" />
        </>
    )
}

export default BlurBG
