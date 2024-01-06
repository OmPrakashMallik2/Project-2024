import React from 'react'
import yourImage from '../media/anime_scan_landscape.jpg'
import yourImage2 from '../media/pm51.webp'

function About() {
  return (
    <div>

      <img className='w-full' src={yourImage} alt='bg' />
      <img className='absolute bottom-0 right-10 h-50 w-auto -mb-40' src={yourImage2} alt='bg' />

      <div className='text-white absolute left-24 top-80 w-80 md:w-3/5 lg:w-2/3 xl:w-1/2 h-auto'>
        <h2 className='text-6xl font-bold pb-8'>PM Vishwakarma</h2>
        <p className='text-justify text-lg'>
          "Traditionally, crores of 'Vishwakarmas' who create something or the other by working hard with their hands, tools and equipment are the builders of this country. We have a huge list of countless people like the blacksmiths, goldsmiths, potters, carpenters, sculptors, artisans, masons etc. The country has brought various incentive schemes for the first time to support the hard work of all these Vishwakarmas. Provisions have been made for training, technology, credit and market support for such people. PM Vishwakarma Kaushal Samman i.e., PM Vishwakarma will bring a sea change in the lives of crores of Vishwakarmas"
        </p>
        <p className='text-right text-lg'> -Hon'ble Prime Minister, 1st February, 2023</p>
      </div>

    </div>
  )
}

export default About
