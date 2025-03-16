import React from "react";

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20
        lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Our <span
                className='underline underline-offset-4 decoration-1 under font-light'>Story</span></h1>
            <p className='text-yellow-600 max-w-80 text-center mb-8'>Designed to Inspire. Built to Last.</p>
        </div>
    )
}

export default About