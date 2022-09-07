import React from 'react'
import Notepal from '../assets/notepal.png'
import Weatherly from '../assets/weatherly.png'
import KatakanaQuiz from '../assets/katakana.png'

export default function Projects() {
  return (
    <div name='projects' className='w-full md:h-screen bg-slate-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-slate-800 border-slate-800'>Projects</p>
        </div>
        {/* Grid container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div 
          style={{ backgroundImage: `url(${Notepal})` }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NotePal
              </span>
              <div className='pt-8 text-center'>
                <a href='https://david-notepal.herokuapp.com/' target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/davidly1/NotePal' target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div 
          style={{ backgroundImage: `url(${Weatherly})` }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weatherly
              </span>
              <div className='pt-8 text-center'>
                <a href='https://majestic-llama-1f1221.netlify.app/' target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/davidly1/Weatherly' target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div 
          style={{ backgroundImage: `url(${KatakanaQuiz})` }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Katakana Quiz
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/davidly1/katakana-quiz' target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
