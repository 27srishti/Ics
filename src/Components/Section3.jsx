import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Vari from "../Images/Vari.png";
import Eco from "../Images/Eco.png";
import Coolent3 from "../Images/Coolent3.png"
import Mist from "../Images/Mist.png"

const Section3 = () => {
  return (
    <section className="bg-white  bg-gray-900">
      
      <div className="h-[32rem]  bg-black">
      <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
            The Product Collections
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
</motion.div>
      </div>
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-4 xl:grid-cols-4">
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-gray-700">
            <img
              className="object-cover bg-gray-300  p-3 w-full rounded-xl aspect-square"
              src={Vari}
              alt=""
            />
            <h1 className="mt-4 mx-5 text-lg md:text-xl text-center  font-semibold  capitalize text-white">
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
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-gray-700">
            <img
              className="object-cover bg-gray-300 p-4 w-full rounded-xl aspect-square"
              src={Coolent3}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold capitalize text-white">
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
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.7, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-gray-700">
            <img
              className="object-cover bg-gray-300 p-3 w-full rounded-xl aspect-square"
              src={Eco}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold capitalize text-white">
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
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-gray-700">
            <img
              className="object-cover bg-gray-300 p-3 w-full rounded-xl aspect-square"
              src={Mist}
              alt=""
            />
            <h1 className="mt-4 text-lg md:text-xl text-center  font-semibold  capitalize text-white">
           Multi-Stage mist collectors
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
          </motion.div>
        </div>
      </div>
    </section>

    
  );
};

export default Section3;
