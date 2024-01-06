import React from 'react'
import yourImage from '../media/anime_scan_landscape.jpg'
import yourImage2 from '../media/pm51.webp'

function About() {
  return (
    <div>
      <img className='w-full' src={yourImage} alt='bg'/>
      <img className='absolute bottom-0 right-10 h-50 w-auto -mb-40' src={yourImage2} alt='bg'/>
      <p>
      </p>
    </div>
  )
}

export default About
