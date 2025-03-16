import React from 'react'
import icon from '/headerlogo.png'
import menuIcon from '/menu_icon.svg'
import crossIcon from '/cross_icon.svg'

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
                <img src={menuIcon} className='md:hidden w-7 cursor-pointer' alt=""/>
                {/*Mobile Menu*/}
                <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white
                transition-all'>
                    <div className='flex justify-end p-6 cursor-pointer'>
                        <img src={crossIcon} className='w-6 ' alt=""/>
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <a href="#Header" className='px-4 py2 rounded-full inline-block '>Home</a>
                        <a href="#About" className='px-4 py2 rounded-full inline-block '>About</a>
                        <a href="#Projects" className='px-4 py2 rounded-full inline-block '>Projects</a>
                        <a href="#Testimonials" className='px-4 py2 rounded-full inline-block '>Testimonials</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
