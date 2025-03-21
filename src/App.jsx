import React from 'react'
import Header from "./components/header.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"

const App = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header/>
            <About />
            <Projects />
        </div>
    )
}

export default App
