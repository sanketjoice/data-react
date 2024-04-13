import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare, 
    FaInstagram,
    FaTwitterSquare,
 } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="flex flex-col">
        <h1 className=" text-[#00df9a] text-3xl font-bold w-full  ">REACT.</h1>
        <p className="text-white py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia totam aliquid maiores! Sequi, non corrupti!</p>
        
        <div className="flex justify-between md:w-[75%] my-6">
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare  size={30}/>
            <FaGithubSquare  size={30}/>
            <FaInstagram  size={30}/>
            <FaTwitterSquare size={30} />
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h5 className="text-gray-400 font-medium text-[20px]">Solutions</h5>
            <ul>
            <li className="py-2 text-small">Analytics</li>
            <li className="py-2 text-small">Marketing</li>
            <li className="py-2 text-small">Commerce</li>
            <li className="py-2 text-small">Insights</li>
          </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-medium text-[20px]">Support</h5>
            <ul>
            <li className="py-2 text-small">Pricing</li>
            <li className="py-2 text-small">Documentation</li>
            <li className="py-2 text-small">Guides</li>
            <li className="py-2 text-small">API</li>
          </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-medium text-[20px]">Company</h5>
            <ul>
            <li className="py-2 text-small">About</li>
            <li className="py-2 text-small">Blog</li>
            <li className="py-2 text-small">Careers</li>
            <li className="py-2 text-small">Press</li>
          </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-medium text-[20px]">Legal</h5>
            <ul>
            <li className="py-2 text-small">Claim</li>
            <li className="py-2 text-small">Policy</li>
            <li className="py-2 text-small">Terms</li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer