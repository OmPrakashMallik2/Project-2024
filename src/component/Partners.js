import React from 'react'
import Logo1 from '../media/logo1.png'
import Logo2 from '../media/logo2.png'
import Logo3 from '../media/logo3.png'
import Logo4 from '../media/logo4.png'
import Logo5 from '../media/logo5.png'
import Logo6 from '../media/logo6.png'
import Logo7 from '../media/logo7.png'
import Logo8 from '../media/logo8.png'
import Logo9 from '../media/logo9.png'
import Logo10 from '../media/logo10.png'
import Logo11 from '../media/logo11.png'
import Logo12 from '../media/logo12.png'
import Logo13 from '../media/logo13.png'
import Logo14 from '../media/logo14.png'

function Partners() {
  return (

    <div className='p-24'>
      <div className='text-center'>
        <h1 className='py-2 pb-5 text-5xl font-bold'>Our Partners</h1>
        <p className='pb-10 text-m font-normal items-center'>PM Vishwakarma is a team effort! With partners like you, We can empower every Indian to achieve their dreams.</p>
      </div>
      <div className="px-40 grid grid-cols-5 gap-5 p-10 item-center">
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo1} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo2} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo3} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo4} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo5} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo6} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo7} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo8} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo9} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo10} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo11} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo12} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo13} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo14} alt='partner' />
        <img className='bg-white p-6 rounded object-cover w-auto h-24' src={Logo7} alt='partner' />
      </div>
    </div>
  )
}

export default Partners