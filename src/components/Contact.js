import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-slate-400 flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/bba02550-581a-4fda-8e57-980cbba88992' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-slate-800 text-slate-800'>Contact</p>
          <p className='text-slate-200 py-4'>Submit the form below or email me at - david26ly@gmail.com</p>
        </div>
        <input className='bg-slate-200 p-2' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-slate-200' type="email" placeholder='Email' name='email' />
        <textarea className='bg-slate-200 p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-slate-800 hover:border-slate-800 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}
