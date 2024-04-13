import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav]=useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=" text-white flex justify-between max-w-[1240px] h-24 mx-auto px-4 items-center">
        <h1 className=" text-[#00df9a] text-3xl font-bold w-full  ">REACT.</h1>
        <ul className="hidden md:flex">
        <li className="p-5 font-semibold">Home</li>
        <li className="p-5 font-semibold">Account</li>
        <li className="p-5 font-semibold">Signin</li>
        <li className="p-5 "><button className="bg-white h-9 w-[100px] rounded-sm text-black font-semibold">Get Started</button></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div>
          <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
          <h1 className=" text-[#00df9a] text-3xl font-bold w-full p-4 ">REACT.</h1>
          <ul className="pt-12 uppercase">
        <li className="p-4 border-pt-12 border-b border-gray-600">Home</li>
        <li className="p-4 border-pt-12 border-b border-gray-600">Company</li>
        <li className="p-4 border-pt-12 border-b border-gray-600">Resources</li>
        <li className="p-4 border-pt-12 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar