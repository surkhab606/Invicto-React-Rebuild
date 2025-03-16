import React from 'react'
import Header from "./components/header.jsx"
import About from "./components/about.jsx"

const App = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header/>
            <About />
        </div>
    )
}

export default App
