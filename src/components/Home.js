import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-slate-400'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-slate-200'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-slate-800'>David Ly</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-300'>I'm a <span className='text-slate-800'>Software Developer</span></h2>
        <div>
          <Link to='projects' smooth={true}>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-800 hover:border-slate-800'>View Projects <LaunchIcon className='ml-3 hover:' /></button>
          </Link>
        </div>
      </div>
    </div>
  )
}
