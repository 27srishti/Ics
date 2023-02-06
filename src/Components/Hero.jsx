import React from "react";
import hero from "../Images/hero.mp4";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Transition } from "@headlessui/react";
const Hero = () => {
  return (
    <section>
      <header className="relative  flex items-center justify-center h-screen mb-12 overflow-hidden">
        
        <div className="relative w-full bg-black">
        
          <div className="relative z-30 p-5 text-2xl text-white h-screen bg-black bg-opacity-80 ">
          <div className="text-white relative  ">
      <div className="Max-w-[800px] font-Poppins  w-full h-screen mx-auto text-center flex flex-col justify-center ">
      {/* <nav className="bg-black text-white hover:text-gray-700 text-xs sm:text-sm md:text-sm  lg:text-sm font-medium ">
        <div className="container flex items-center text-center  justify-center py-4 mx-auto  capitalize ">
          <a
            href="#"
            className=" border-b-2 border-blue-500 mx-3 sm:mx-6"
          >
            Home
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
          >
            About 
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-3 sm:mx-6"
          >
            Products
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
          >   How-To-Videos </a>
        
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-3 sm:mx-6"
          >
            Contact 
          </a>
        </div>
      </nav> */}
      <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <p className="text-white  pt-28 mb-3 ">
          ZERO fees from Influencers until you earn your first 1 Million
        </p>{" "}</motion.div>
        <div className="text-white md:text-6xl  sm:text-5xl text-2xl font-bold font-Poppins md:py-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 2, type: "spring" }}
            variants={{
              hidden: { opacity: 0, x: -180 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              We are One Stop
              <span className="pl-3 text-blue-800 font-Poppins ">
                Influencer
              </span>
              <br />
            </div>{" "}
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 180 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
          <a>
            <div className="pt-2 sm:pt-3 md:pt-7 font-Poppins  text-blue-800">
              Marketing Agency
            </div>
          </a>
          </motion.div>
        </div>
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <p className=" text-gray-500 font-Poppins md:text-xl pt-3 sm:pt-4 md:pt-2 sm:text-base  md:text-xl font-bold">
          We help both Influencers and Brands to stay on top of their game.
        </p></motion.div>

        {/* <button className="rounded-xl border  hover:text-violet-200  border-violet-500 w-[150px] font-medium my-10 mx-auto py-3 ">
          {" "}
          Get Started
        </button> */}
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <a
          href="#_"
          class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group rounded-xl border  hover:text-violet-200  border-blue-500 w-[150px] font-medium my-10 mx-auto py-3"
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-800 opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Get Started
          </span>
          <span class="absolute inset-0 border border-blue-500 rounded-full"></span>
        </a>
        </motion.div>
      </div>
    </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="mx-auto bg-auto absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      
    </section>
  );
};

export default Hero;
