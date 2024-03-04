import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
const Header = () => {
    const [showMenu , setShowMenu] = useState(false);
    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
          setShowMenu(false);
        }
      };
  return (
    <header className="header w-full h-[100px] border-b-[1px] border-slate-200">
         <div className="max-w-[1200px] px-3 xl:p-0 m-auto flex items-center h-full justify-between">
            <Link to="/" className="logo-box w-[130px] lg:w-[200px] object-cover h-full">
                <img src={logo} alt="app-logo" className='w-full h-full' />
            </Link>
            <nav className={`navigation lg:block ${showMenu ? 'fixed z-20 top-0 right-0 bg-slate-200 w-3/4 h-screen':'hidden'} lg:block`}>
                {showMenu && <div onClick={()=>{setShowMenu(false)}} className='mb-10 cursor-pointer flex text-[25px] justify-end p-4'>
                     <GrClose/>
                    </div>}
                <ul className={`navigation-links flex flex-row gap-4 items-center justify-center ${showMenu && 'flex-col w-full gap-8'}`}>
                   <NavLink onClick={closeMenuOnMobile} to="/" className={`text-[14px] ${showMenu && 'block w-full'} lg:text-[16px] capitalize px-5 py-2 font-[500] transition duration-300 hover:text-primary`}>home</NavLink>
                   <NavLink onClick={closeMenuOnMobile} to="/HowItWork" className={`text-[14px] ${showMenu && 'block w-full'} lg:text-[16px] capitalize px-5 py-2 font-[500] transition duration-300 hover:text-primary`}>how it works</NavLink>
                   <NavLink onClick={closeMenuOnMobile} to="/Pricing" className={`text-[14px] ${showMenu && 'block w-full'} lg:text-[16px] capitalize px-5 py-2 font-[500] transition duration-300 hover:text-primary`}>pricing</NavLink>
                   <NavLink onClick={closeMenuOnMobile} to="/FAQ" className={`text-[14px] ${showMenu && 'block w-full'} lg:text-[16px] capitalize px-5 py-2 font-[500] transition duration-300 hover:text-primary`}>FAQ</NavLink>
                   <NavLink onClick={closeMenuOnMobile} to="/Contact" className={`text-[14px] ${showMenu && 'block w-full'} lg:text-[16px] capitalize px-5 py-2 font-[500] transition duration-300 hover:text-primary`}>contact</NavLink>
                </ul>
            </nav>
            <div className="flex gap-3 items-center">
            {/* <div className="reservation">
                <a href="https://d0jstai1zyk.typeform.com/to/J4A5Mjbx" className='bg-primary text-[10px] sm:text-[14px] lg:text-[16px] px-6 py-3 rounded-md text-slate-50 uppercase font-[500] tracking-normal'>reserve your spot</a>
            </div> */}
            <button onClick={()=>{setShowMenu(true)}} className="bar-icon cursor-pointer lg:hidden text-[40px]">
               <HiOutlineMenuAlt3/>
            </button>
            </div>
         </div>
    </header>
  )
}

export default Header