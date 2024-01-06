import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Top() {
  return (
    <div className='bg-orange-600 flex justify-between text-white py-0.5 px-5'>
      <div className=''>
        <p className='text-xs'>भारत सरकार | सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</p>
        <p className='text-xs'>Government of India | Ministry of Micro, Small & Medium Enterprises</p>
      </div>
      <div className='text-white flex'>
        <TwitterIcon className=''/>
        <FacebookIcon className=''/>
        <YouTubeIcon className=''/>
      </div>
    </div>
  )
}

export default Top