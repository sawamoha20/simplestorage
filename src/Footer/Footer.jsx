import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { Link} from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer overflow-hidden min-h-[350px] py-5 px-3 bg-blue-50 flex items-center justify-center'>
         <div className="w-[1200px] flex flex-wrap px-5 lg:p-0 m-auto justify-center lg:justify-between gap-10 items-start">
            <div className="logo flex flex-col items-center md:items-start">
                <h1 className='md:text-[40px] text-[30px] text-center font-bold text-slate-700'>SIMPLE <span className='text-primary'>STORAGE</span></h1>
                <p className='text-slate-800 text-[20px] flex gap-1 mt-2 font-[500] items-start'><BiSolidQuoteAltLeft className='text-[12px]'/> Keep it simple <BiSolidQuoteAltRight className='text-[12px]'/></p>
            </div>
            <div className="resources w-[300px] text-center md:text-left">
                <h1 className='text-primary text-center text-[20px] font-[600] mb-3'>Resourses</h1>
                <div className="resources-items flex flex-col gap-1 justify-center md:justify-start items-center w-full">
                   <Link to="/" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>home</Link>
                   <Link to="/HowItWork" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>how it works</Link>
                   <Link to="/Pricing" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>pricing</Link>
                   <Link to="/Faq" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>FAQ</Link>
                   <Link to="/Contact" className={`text-[14px] lg:text-[16px] capitalize py-2 font-[500] transition duration-300 hover:text-primary`}>contact</Link>
                </div>
            </div>
                <div className="follow-us w-[300px] text-center md:text-left">
                <h1 className='text-primary text-center text-[20px] font-[600] mb-3'>Follow Us</h1>
                    <div className="social-media-items flex flex-row md:flex-col gap-5 justify-center md:justify-start items-center w-full">
                        <a href='https://web.facebook.com/profile.php?id=61556405020747' className="item text-[25px] transition duration-300 hover:text-primary">
                            <FaFacebook/>
                        </a>
                        <a href='https://www.instagram.com/simplestorage_kenitra/' className="item text-[25px] transition duration-300 hover:text-primary">
                          <FaInstagram/>
                        </a>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default Footer