import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import Resume from '../docs/Resume.pdf'

export default function About() {

  const onResumeClick = () => {
    window.open(Resume)
  }

  return (
    <div name='about' className='w-full h-screen bg-slate-400 text-slate-800'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-slate-800'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>I'm David, I hope you have a great viewing time and have a nice day :)</p>
          </div>
          <div>
            <p className='sm:pt-1'>I'm a 2A Management Engineering student at the University of Waterloo. I am passionate about learning new software and applying it
              by creating cool things that will improve the lives of others and myself.
              <span className='font-bold pl-1'>
                I'm currently looking for a 4 month co-op for Winter 2023.
              </span>
              <div>
                <button 
                className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-800 hover:border-slate-800'
                onClick={onResumeClick}>View Resume <LaunchIcon className='ml-3 hover:' /></button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
