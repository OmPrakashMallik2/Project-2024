import React from 'react'
import Card from './Card';

function Partners() {
  return (

    <div className='p-24'>
      <div className='text-center'>
        <h1 className='py-2 text-5xl font-bold'>Our Partners</h1>
        <p className='py-1 text-m font-normal'>PM Vishwakarma is a team effort! With partners like you, We can empower every Indian to achieve their dreams.</p>
      </div>
      <div className="py-8 flex justify-around">
        <Card logo="Logo here" title="58,81,834" content="No of Applications Submitted" />
        <Card logo="Logo here" title="10,19,371" content="Stage 1 Verification Completed: Gram Panchayat or ULB Level." />
        <Card logo="Logo here" title="4,31,350" content="Stage 2 Verification Completed: District Implementation Committee" />
        <Card logo="Logo here" title="2,01,503" content="Stage 3 Verification Completed: Screening Committee" />
        <Card logo="Logo here" title="1,73,417" content="No of Applicants Successfully Registered" />
      </div>
    </div>
  )
}

export default Partners