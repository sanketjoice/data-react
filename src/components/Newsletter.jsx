import React from 'react'

const Newsletter = () => {
  return (
    <div className=" w-full py-16  bg-black text-white pt-12 flex flex-col px-4">
        <div className="mx-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</p>
        <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <input type="email" placeholder="Enter your email" className="p-3 flex w-full rounded-md text-black"/>
        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify me</button>
        </div>
        <p className="mt-2">We care bout the protection of your data. Read out <span className="text-[#00df9a]">Privacy policy.</span></p>
        </div>
        </div>
    </div>
  )
}

export default Newsletter