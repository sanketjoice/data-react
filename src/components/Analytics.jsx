import React from 'react'

const Analytics = () => {
  return (
    <div className="w-full bg-white px-16 py-4">
        <div className="mx-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src="https://images.pexels.com/photos/6483626/pexels-photo-6483626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-[500px]"/>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold pb-3 sm:pt-2">Data Analytics Dashboard</p>
          <h3 className="font-bold text-3xl pb-2">Manage Data Analytics Centrally</h3>
          <p className="text-1xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident accusantium voluptas, rem consequatur in autem placeat! Doloremque vel fuga, optio quidem recusandae ducimus error alias voluptatem ex temporibus labore?</p>
          <button className="bg-black w-[140px] h-[30px] mt-4 text-[#009f9a] font-semibold text-1xl p-1 rounded-md md:w-[200px] md:h-10 md:text-[18px] md:font-semibold">Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics