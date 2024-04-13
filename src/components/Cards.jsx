import React from 'react'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="grid md:grid-cols-3 max-w-[1240px] mx-auto gap-8">
        <div className=" w-full flex flex-col items-center p-4 my-4 shadow-xl hover:scale-105 rounded-lg ">
          <img src="https://logodix.com/logo/649370.png" alt="/" className="w-20 mx-auto pt-2 mx-8"/>
          <h2 className="font-bold mt-3 text-2xl">Single User</h2>
          <h2 className="font-bold text-2xl mt-3">$149</h2>
          <div className="text-center font-medium">
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">500 GB Storage</p>
          <p className="py-2 border-b border-gray-400 mx-8">1 User Allowed </p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Start Trial</button>
        </div>
        <div className=" w-full flex flex-col items-center p-4 my-4 shadow-xl  rounded-lg hover:scale-105 bg-gray-300  ">
          <img src="https://th.bing.com/th/id/OIP.zlYp1lvVP8jeT40LML-WfgHaHa?rs=1&pid=ImgDetMain" alt="/" className="w-20 mx-auto pt-2 mx-8"/>
          <h2 className="font-bold mt-3 text-2xl">Partnership</h2>
          <h2 className="font-bold text-2xl mt-3">$199</h2>
          <div className="text-center font-medium">
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">1 TB Storage</p>
          <p className="py-2 border-b border-gray-400 mx-8">3 Users Allowed </p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Start Trial</button>
        </div>
        <div className=" w-full flex flex-col items-center p-4 my-4 shadow-xl hover:scale-105 rounded-lg ">
          <img src="https://th.bing.com/th/id/OIP.lkGlZ5KL07YBk4lxFjKmzwAAAA?rs=1&pid=ImgDetMain" alt="/" className="w-20 mx-auto pt-2 mx-8"/>
          <h2 className="font-bold mt-3 text-2xl">Group Account</h2>
          <h2 className="font-bold text-2xl mt-3">$2999</h2>
          <div className="text-center font-medium">
          <p className="py-2 border-b border-gray-400 mx-8 mt-8">5 TB Storage</p>
          <p className="py-2 border-b border-gray-400 mx-8">10 Users Allowed </p>
          <p className="py-2 border-b border-gray-400 mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards