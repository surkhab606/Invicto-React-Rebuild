import React from 'react'
import Navbar from './navbar.jsx'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex
        items-center w-full overflow-hidden' style={{backgroundImage: "url('./header_img.jpg')"}} id='Header'>
            <Navbar/>
            <div>
                <h2>Build Your Dream Home with Calgary’s Trusted Experts</h2>
            </div>
        </div>
    )
}

export default Header
