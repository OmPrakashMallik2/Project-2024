import React from 'react';
import yourImage from '../media/emblem-dark.png';

function Header() {
    return (
        <div className='px-5 py-3 bg-white flex justify-between'>

            {/* Left */}
            <div className='flex items-center'>
                <img src={yourImage} alt="Logo" />
                <div className='px-3'>
                    <p className='font-bold text-xl'>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</p>
                    <p className='font-medium text-lg'>MINISTRY OF</p>
                    <p className='font-extrabold text-xl'>Micro, Small & Medium Enterprises</p>
                </div>
            </div>

            {/* Right */}
            <div className='flex'>
                {/* <img src='../media/g20.svg' alt="Logo" /> */}
                <img src='scr/component/about.jpg' alt="Logo" />
            </div>

        </div>
    );
}

export default Header;
