import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className='bg-blue-700 py-4 text-white flex justify-around'>
        <Link to='/' className='font-medium'>Home</Link>
        <Link to='/about' className='font-medium'>About Scheme</Link>
        <Link to='/schemebenifits' className='font-medium'>Scheme Benefits</Link>
        <Link to='/knowledge' className='font-medium'>Knowledge Centre</Link>
        <Link to='/faq' className='font-medium'>FAQ</Link>
        <Link to='/whatsnew' className='font-medium'>What's New</Link>
        <Link to='/contact' className='font-medium'>Contact Us</Link>
        <Link to='/register' className='font-medium'>How To Register</Link>
        <Link to='/help' className='font-medium'>Help</Link>
      </div>
    </div>
  );
}

export default Nav;

