import React from "react";
import stairs from '/Untitled.png'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20
        lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Our <span
                className='underline underline-offset-4 decoration-1 under font-light'>Story</span></h1>
            <p className='text-yellow-600 max-w-80 text-center mb-8'>Designed to Inspire. Built to Last.</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={stairs} alt="" className='w-full sm:w-1/2 max-w-lg'/>
                <div className='flex flex-col items-center md:items-start mt-10 text-yellow-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-yellow-600'>From Start to Finish</p>
                            <p className='text-black'>Crafted with Care</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-yellow-600'>10+</p>
                            <p className='text-black'>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-yellow-600'>25,000+</p>
                            <p className='text-black'>Square Feet of Quality Craftsmanship Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-yellow-600'>Your Vision</p>
                            <p className='text-black'>Our Commitment</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg text-black'>We build new homes, transform old ones, and bring
                        quality craftsmanship to every project. Based in Calgary, our work spans the
                        entire city—creating homes that are designed to inspire and built to last.
                        From modern builds to timeless renovations, every detail is crafted with care
                        and precision. With a commitment to excellence, we turn visions into reality—one
                        home at a time.</p>
                        <button className='bg-yellow-600 text-white px-8 py-2 rounded'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About