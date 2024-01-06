import React from 'react'

function Footer() {
  return (
    <div className='px-24 pt-24'>

      <div className='flex justify-evenly'>

        <div>
          <h3 className='pb-4 font-bold text-sm'>Know Us</h3>
          <p className='text-sm pb-1'>Contact Us</p>
          <p className='text-sm pb-1'>Scheme Guidence</p>
          <p className='text-sm pb-1'>FAQs</p>
        </div>

        <div>
          <h3 className='pb-4 font-bold text-sm'>Policy</h3>
          <p className='text-sm pb-1'>Declaimer</p>
          <p className='text-sm pb-1'>Feedback</p>
        </div>

        <div>
          <h3 className='pb-4 font-bold text-sm'>Social</h3>
          <p className='text-sm pb-1'>Facebook</p>
          <p className='text-sm pb-1'>Twitter</p>
          <p className='text-sm pb-1'>Youtube</p>
        </div>
      </div>

      <div className='flex justify-center p-10'>
        <p className='text-sm pb-1'>Declaimer</p>
        <p className='text-sm pb-1 px-8'>Privacy Policy</p>
        <p className='text-sm pb-1'>Terms & Conditions</p>
      </div>

    </div>
  )
}

export default Footer
