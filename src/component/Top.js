import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Top() {
  return (
    <header className='bg-orange-600 flex justify-between items-center text-white py-2 px-5'>
      <div>
        <p className='text-xs'>भारत सरकार | सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</p>
        <p className='text-xs'>Government of India | Ministry of Micro, Small & Medium Enterprises</p>
      </div>
      <div className='text-white flex space-x-4'>
        <TwitterIcon className='text-xl hover:text-blue-400 cursor-pointer' />
        <FacebookIcon className='text-xl hover:text-blue-600 cursor-pointer' />
        <YouTubeIcon className='text-xl hover:text-red-600 cursor-pointer' />
      </div>
    </header>
  );
}

export default Top
