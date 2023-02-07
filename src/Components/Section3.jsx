import React, { useState } from "react";

import Vari from "../Images/Vari.png";
import Eco from "../Images/Eco.png";
import Coolent3 from "../Images/Coolent3.png"
import Mist from "../Images/Mist.png"

const Section3 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="h-[32rem]  bg-black">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            The Product Collections
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-4 xl:grid-cols-4">
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img
              className="object-cover bg-gray-300  p-3 w-full rounded-xl aspect-square"
              src={Vari}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold text-gray-700 capitalize dark:text-white">
              High Pressure Systems
            </h1>
            <p className="mt-2 md:text-xl text-blue-600 capitalize ">
              VariFlow
            </p>
            <a
              href="#_"
              class="relative w-[40%] md:w-[50%] md:h-[50%] text-center my-4 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 text-black group-hover:text-white ease">
               Know More
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img
              className="object-cover bg-gray-300 p-4 w-full rounded-xl aspect-square"
              src={Coolent3}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold text-gray-700 capitalize dark:text-white">
            Coolant Filtration Systems
            </h1>
            <p className="mt-2 md:text-xl text-blue-600 capitalize ">
            CycloFlow
            </p>
            <a
              href="#_"
              class="relative w-[40%] md:w-[50%] h-[50%] text-center my-4 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 text-black group-hover:text-white ease">
               Know More
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img
              className="object-cover bg-gray-300 p-3 w-full rounded-xl aspect-square"
              src={Eco}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold text-gray-700 capitalize dark:text-white">
            Medium Pressure Systems
            </h1>
            <p className="mt-2 md:text-xl text-blue-600 capitalize ">
            EcoFlow
            </p>
            <a
              href="#_"
              class="relative w-[40%] md:w-[50%] h-[50%] text-center my-4 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 text-black group-hover:text-white ease">
               Know More
              </span>
            </a>
          </div>
          
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img
              className="object-cover bg-gray-300 p-3 w-full rounded-xl aspect-square"
              src={Mist}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold text-gray-700 capitalize dark:text-white">
           Multi-Stage oil mist collectors
            </h1>
            <p className="mt-2 md:text-xl text-blue-600 capitalize ">
             Mist Collectors
            </p>
            <a
              href="#_"
              class="relative w-[40%] md:w-[50%] h-[50%] text-center my-4 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 text-black group-hover:text-white ease">
               Know More
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </section>

    // <section className="dark:bg-gray-800 dark:text-gray-100">
    //   <h2 className="text-lg md:text-2xl font-medium pb-5">
    //     Constomer Satisfactory is our biggest concern!
    //   </h2>
    //   <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
    //     <a
    //       rel="noopener noreferrer"
    //       href="#"
    //       className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
    //     >
    //       <img
    //         src={Coolent1}
    //         alt=""
    //         className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
    //       />
    //       <div className="p-6 space-y-2 lg:col-span-5">
    //         <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
    //           Noster tincidunt reprimique ad pro
    //         </h3>
    //         <span className="text-xs dark:text-gray-400">
    //           February 19, 2021
    //         </span>
    //         <p>
    //           Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
    //           graece fuisset, eos affert putent doctus id.
    //         </p>
    //       </div>
    //     </a>
    //     <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //       <a
    //         rel="noopener noreferrer"
    //         href="#"
    //         className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
    //       >
    //         <img
    //           role="presentation"
    //           className=" object-contain w-full rounded h-44 dark:bg-gray-500"
    //           src={Coolent2}
    //         />
    //         <div className="p-6 space-y-2">
    //           <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
    //             In usu laoreet repudiare legendos
    //           </h3>
    //           <span className="text-xs dark:text-gray-400">
    //             January 21, 2021
    //           </span>
    //           <p>
    //             Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
    //             neglegentur, ex has tantas percipit perfecto. At per tempor
    //             albucius perfecto, ei probatus consulatu patrioque mea, ei
    //             vocent delicata indoctum pri.
    //           </p>
    //         </div>
    //       </a>
    //       <a
    //         rel="noopener noreferrer"
    //         href="#"
    //         className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
    //       >
    //         <img
    //           role="presentation"
    //           className="object-cover w-full rounded h-44 dark:bg-gray-500"
    //           src="https://source.unsplash.com/random/480x360?2"
    //         />
    //         <div className="p-6 space-y-2">
    //           <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
    //             In usu laoreet repudiare legendos
    //           </h3>
    //           <span className="text-xs dark:text-gray-400">
    //             January 22, 2021
    //           </span>
    //           <p>
    //             Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
    //             neglegentur, ex has tantas percipit perfecto. At per tempor
    //             albucius perfecto, ei probatus consulatu patrioque mea, ei
    //             vocent delicata indoctum pri.
    //           </p>
    //         </div>
    //       </a>
    //       <a
    //         rel="noopener noreferrer"
    //         href="#"
    //         className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
    //       >
    //         <img
    //           role="presentation"
    //           className="object-cover w-full rounded h-44 dark:bg-gray-500"
    //           src="https://source.unsplash.com/random/480x360?3"
    //         />
    //         <div className="p-6 space-y-2">
    //           <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
    //             In usu laoreet repudiare legendos
    //           </h3>
    //           <span className="text-xs dark:text-gray-400">
    //             January 23, 2021
    //           </span>
    //           <p>
    //             Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
    //             neglegentur, ex has tantas percipit perfecto. At per tempor
    //             albucius perfecto, ei probatus consulatu patrioque mea, ei
    //             vocent delicata indoctum pri.
    //           </p>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="flex justify-center">
    //       <button
    //         type="button"
    //         className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
    //       >
    //         Load more posts...
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Section3;