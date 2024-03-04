import React from 'react'
import heroImg from "../assets/simple2.png"
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="max-w-[1200px] m-auto flex flex-col-reverse md:flex-row">
            <div className="content-right px-4 py-14 flex-1 flex flex-col gap-10">
                <h1 className='text-[35px] lg:text-[60px] font-[700] capitalize'>simple <span className='text-primary'>storage</span> solutions just for you.</h1>
                <p className='capitalize text-[18px] text-slate-600 font-[400]'>summer storage made for UIT students - by UIT students</p>
                <a href='https://d0jstai1zyk.typeform.com/to/J4A5Mjbx' className='bg-primary w-[200px] text-center px-6 py-4 rounded-md text-slate-50 uppercase font-[500] tracking-normal'>reserve now</a>
            </div>
            <div className="content-left h-[600px] flex-1 flex items-start justify-center">
                <div className="image-box w-full h-[500px] text-center">
                    <img src={heroImg} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero