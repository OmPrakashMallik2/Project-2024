import React from 'react';
import yourImage from '../media/emblem-dark.png';
import yourImage1 from '../media/g20.png';
import yourImage2 from '../media/pm_vishwakarma_logo.png';
import yourImage3 from '../media/azadi23.png';

function Header() {
    return (
        <div className='px-5 py-3 bg-white flex justify-between'>

            {/* Left */}
            <div className='flex items-center'>
                <img src={yourImage} alt="Logo" />

                <div className='px-3 items-center'>
                    <p className='font-bold text-xl'>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</p>
                    <p className='font-medium text-lg'>MINISTRY OF</p>
                    <p className='font-extrabold text-xl'>Micro, Small & Medium Enterprises</p>
                </div>

            </div>

            {/* Right */}
            <div className='flex items-center'>
                <img className=' h-20 w-20' src={yourImage2} alt="Logo" />
                <img className='pl-4 h-14 w-auto' src={yourImage1} alt="Logo" />
                <img className='pl-4 h-12 w-auto' src={yourImage3} alt="Logo" />
            </div>

        </div>
    );
}

export default Header;
