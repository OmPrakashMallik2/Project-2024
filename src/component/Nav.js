import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className='bg-blue-700 py-4 text-white flex justify-around'>
        <Link to='/' className='font-medium'>Home</Link>
        <div className="relative group" onClick={toggleDropdown}>
           <Link to='/' className='font-medium flex items-center'>About Scheme<ArrowDropDownIcon /></Link>

           {/* Dropdown Content */}
           <ul className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white text-gray-700 p-3 space-y-2`}>
             <li><Link to='/schemebenifits'>Scheme Benefits</Link></li>
             <li><Link to='/knowledge'>Knowledge Centre</Link></li>
             <li><Link to='/register'>How To Register</Link></li>
             <li><Link to='/help'>Login</Link></li>
          </ul>
        </div>

        <Link to='/schemebenifits' className='font-medium'>Scheme Benefits</Link>
        <Link to='/knowledge' className='font-medium'>Knowledge Centre</Link>
        <Link to='/faqs' className='font-medium'>FAQ</Link>
        <Link to='/whatsnew' className='font-medium'>What's New</Link>
        <Link to='/contactus' className='font-medium'>Contact Us</Link>
        <Link to='/register' className='font-medium'>How To Register</Link>
        <Link to='/help' className='font-medium'>Login<ArrowDropDownIcon/></Link>
      </div>
    </div>
  );
}

export default Nav;

