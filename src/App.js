import React from "react"

import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
    Navbar
} from "./containers"
import { Brand, CTA } from "./components"
import './App.css'

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
