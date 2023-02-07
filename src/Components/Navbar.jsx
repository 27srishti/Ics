import React from "react";
import Logo from "..//Images/Logo.png";
const Navbar = () => {
  return (
    <div></div>
    // <header className="bg-white  ">
    //   <div className=" text-sm mx-auto h-7 items-center px-3 flex justify-between  bg-gradient-to-r from-blue-600 to-gray-900">
    //     <ui className="text-gray-600  items-center">
    //       <img
    //         className="  w-24 "
    //         src="data:image/png;base64,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"
    //       />
    //     </ui>
    //     <ui className="text-gray-200  invisible lg:visible  md:visible text-xs">Mail: info@industrialcoolantsystems.com <span className="ml-10 invisible lg:visible  md:visible">Made in U.S.A</span></ui>
        
        
    //   </div>
    //   {/* ------------------------------------------------------------------------------------------------------------- */}
    //   <nav className="sm:px-4 py-2.5 bg-white mx-auto  w-full z-20 flex justify-between border-b border-gray-200 dark:border-gray-600">
    //     <div className="container flex flex-wrap items-center justify-between mx-auto">
    //       <a href="https://flowbite.com/" className="flex  items-center">
    //         <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
    //       </a>
    //       <div className="flex md:order-2 ">
    //         {/* <img
    //           className="mr-1 w-10 h-10 invisible md:visible"
    //           src="https://img.icons8.com/ios/40/null/region-code.png"
    //         />
    //         <div className=" md:w-60 hidden   invisible md:visible sm:flex  flex-col place-items-left">
    //           <span className="font-bold  md:text-md">
    //             Deliver to{" "}
    //             <span className=" font-normal cursor-pointer underline hover:text-gray-900 text-blue-700">
    //               Name
    //             </span>
    //           </span>
    //           <span className=" font-normal cursor-pointer text-sm underline hover:text-gray-900 text-blue-700">
    //             {" "}
    //             Location
    //           </span>
    //         </div> */}
    //         <a
    //           href="#_"
    //           className="relative w-[5rem] sm:w-[7rem] -mx-8 md:-mx-0 lg:w[7rem] md:w-[7rem]   text-center rounded  py-2.5 overflow-hidden group  bg-blue-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 shadow shadow-lg transition-all ease-out duration-300"
    //         >
    //           <span className="absolute right-0 w-8 h-32  -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
    //           <span className="relative text-base ">Sign-Up</span>
    //         </a>
    //         <li className="invisible rounded-sm cursor-pointer md:visible ml-2 lg:ml-4 relative inline-block">
    //           <a>
    //             <svg
    //               className="h-9 lg:h-10 p-2 text-blue-700  hover:text-gray-600"
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="far"
    //               data-icon="user"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 448 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
    //               />
    //             </svg>
    //           </a>
    //         </li>
           
    //       </div>

    //       <div className=" md:w-full hidden  cursor-pointer max-w-xs  md:max-w-xl xl:max-w-4xl 2xl:max-w-5xl bg-gray-100 rounded-md  xl:flex items-center">
    //         <select className="bg-transparent   uppercase font-bold text-sm p-4 mr-2">
    //           <option>all categories</option>
    //           <option>High Pressure Systems</option>
    //           <option>Medium Pressure Systems</option>
    //           <option>High Pressure Oil Systems</option>
    //           <option>Coolant Filtration Systems</option>{" "}
    //           <option>Mist Cillectors</option>
    //           <option>Watch Dog</option>
    //         </select>
    //         <input
    //           className="border-l-2  border-gray-300 bg-transparent font-semibold text-sm pl-6"
    //           type="text"
    //           placeholder="I'm searching for ..."
    //         />
    //         <svg
    //           className="ml-auto h-5 px-4  text-gray-500"
    //           aria-hidden="true"
    //           focusable="false"
    //           data-prefix="far"
    //           data-icon="search"
    //           role="img"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 512 512"
    //         >
    //           <path
    //             fill="currentColor"
    //             d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </nav>
    //   {/* ------------------------------------------------------------------------------------------------ */}
    //   <nav className="bg-gray-200 op text-gray-800 hover:text-gray-700 text-xs sm:text-sm md:text-sm  lg:text-sm font-medium ">
    //     <div className="container flex items-center text-center  justify-center py-4 mx-auto  capitalize ">
    //       <a
    //         href="#"
    //         className=" border-b-2 border-blue-500 mx-3 sm:mx-6"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="#"
    //         className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
    //       >
    //         About 
    //       </a>
    //       <a
    //         href="#"
    //         className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-3 sm:mx-6"
    //       >
    //         Products
    //       </a>
    //       <a
    //         href="#"
    //         className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
    //       >   How-To-Videos </a>
        
    //       <a
    //         href="#"
    //         className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
    //       >
    //         Contact 
    //       </a>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
