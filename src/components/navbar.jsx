import React from 'react'
import icon from '/headerlogo.png'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between
            items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img alt="" className="w-50 h-20" src={icon} />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400 underline-none">Home</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400 no-underline">About</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400 no-underline">Projects</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400 no-underline">Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
