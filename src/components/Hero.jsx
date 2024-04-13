import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white w-full flex flex-col items-center h-[600px] md:h-[700px] justify-center pb-12">
        <div className="text-[#00df9a] uppercase  md:text-3xl">Growing with data analytics</div>
        <div className="text-3xl font-bold pt-2 md:text-3xl">Grow with Data.</div>
        <div>
        <p className="font-semibold pt-2 md:text-3xl">Fast, Flexing financing for <ReactTyped className="text-gray-500" strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/></p>
            
        </div>
        <div className="text-gray-500 text-center mt-4 font-semibold px-1 md:text-3xl">Monitoring your data analytics to increase revenue for BTB, BTC & SASS platforms.</div>
        <button className="bg-[#00df9a] w-[140px] h-[30px] mt-4 text-black font-semibold text-1xl p-1 rounded-md md:w-[200px] md:h-10 md:text-[18px] md:font-semibold">Get Started</button>
    </div>
  )
}

export default Hero