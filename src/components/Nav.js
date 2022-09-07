import React, { useState } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav() {
  const [isNav, setIsNav] = useState(false)
  
  const handleNavClick = () => setIsNav(!isNav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-400 text-gray-800'>
      <div className='pl-8'>
        <Link to='home'>David Ly</Link>
      </div>

      {/* main menu */}
      <ul className='hidden md:flex'>
      <li>
          <Link to='home' smooth={true}>Home</Link>
        </li>
        <li>
          <Link to='about' smooth={true}>About</Link>
        </li>
        <li>
          <Link to='projects' smooth={true}>Projects</Link>
        </li>
        <li>
          <Link to='contact' smooth={true}>Contact</Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleNavClick} className='md:hidden cursor-pointer'>
        {!isNav ? <MenuIcon /> : <CloseIcon /> }
      </div>

      {/* mobile menu */}
      <ul className={!isNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-400 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to='home' onClick={handleNavClick}>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='about' onClick={handleNavClick}>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='projects' onClick={handleNavClick}>Projects</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='contact' onClick={handleNavClick}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
