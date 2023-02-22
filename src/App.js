import React from "react"

import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
    Navbar,
} from "./containers"
import { Brand, Mobile, BlurBG } from "./components"

import "./App.css"

function App() {
    return (
        <div className="app">
            <div className="container">
                <BlurBG />
                <Navbar />
                <Mobile />
                <Header />
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <Blog />
            </div>
            <Footer />
        </div>
    )
}

export default App
