import React from 'react'
import { IoSendOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="contact-container min-h-screen py-5">
      <div className="content max-w-[1200px] m-auto flex flex-col gap-5 lg:gap-1 lg:flex-row">
        <div className="content-left flex-1 p-2">
            <h1 className='text-[35px] sm:text-[60px] mb-4 uppercase text-slate-700 font-[400]'>ANY QUESTIONS? CONTACT US!</h1>
            <a href="mailto:contact@simplestorage.ma" className='text-[20px] sm:text-[25px] text-slate-400 hover:text-primary'>contact@simplestorage.ma</a>
        </div>
        <div className="content-right flex-1 p-2">
           <form className='flex flex-col gap-4'>
            <div className="flex flex-col sm:flex-row sm:gap-5 gap-4">
             <div className="mb-3 flex flex-col gap-2 w-full sm:w-1/2">
                <label className='text-primary font-[600]' htmlFor="">First Name</label>
                <input type="text" placeholder='enter your first name ...' className='w-full border-[1px] border-slate-300 p-3 rounded-md focus:outline-2 focus:outline-primary'  />
             </div>
             <div className="mb-3 flex flex-col gap-2 w-full sm:w-1/2">
                <label className='text-primary font-[600]' htmlFor="">Last Name</label>
                <input type="text" placeholder='enter your last name ...' className='w-full border-[1px] border-slate-300 p-3 rounded-md focus:outline-2 focus:outline-primary'  />
             </div>
            </div>
            <div className="mb-3 flex flex-col gap-2 w-full">
                <label className='text-primary font-[600]' htmlFor="">Email</label>
                <input type="email" placeholder='enter your email ...' className='w-full border-[1px] border-slate-300 p-3 rounded-md focus:outline-2 focus:outline-primary'  />
             </div>
            <div className="mb-3 flex flex-col gap-2 w-full">
                <label className='text-primary font-[600]' htmlFor="">Message</label>
                <textarea cols="30" rows="10" className='w-full border-[1px] border-slate-300 p-3 rounded-md focus:outline-2 focus:outline-primary'></textarea>
             </div>
             <button className='bg-primary w-[150px] text-center px-2 sm:px-5 py-3 rounded-md text-slate-50 uppercase flex items-center justify-center gap-3 font-[400] sm:font-[500] tracking-normal'><IoSendOutline/> send</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contact