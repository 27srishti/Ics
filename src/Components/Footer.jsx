import React from 'react'
import Logo from "../Images/Logo.png"
const Footer = () => {
  return (

    <footer className="p-4 px-5 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <center>
    <div className="sm:flex items-center sm:items-center sm:justify-between">
      <a href="" className="flex items-center mb-4 sm:mb-0">
        <img src={Logo} className="h-8 mr-3" alt="" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">Products</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact-Us</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500   sm:text-center dark:text-gray-400">© 2023 <a href="https://www.freelancer.com/u/srish2702" className="hover:underline"> <span className='text-blue-500'>Srishti Suratkal</span></a>. All Rights Reserved.
    </span></center>
  </footer>
  
  )
}

export default Footer
