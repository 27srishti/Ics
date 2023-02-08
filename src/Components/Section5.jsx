import React, { useState } from "react";
import Cool from "../Images/Cool.jpg";
import Coolent1 from "../Images/Coolent1.jpg"
import { motion, useAnimation } from "framer-motion";

const Section5 = () => {
  return (
    <section className=" pb-10 bg-gray-900">
      
    
      <div className="container px-6 py-10 mx-auto">
        
        <div className="text-center">
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
          <h1 className="text-xl md:text-2xl mb-14 font-medium  capitalize lg:text-3xl text-white">
            Introducing our new <br />{" "}
            <span className="text-blue-400">Adaptive Pressure Control</span> and {" "}
            <span className="text-blue-400"> Coolant Filtration System</span>
          </h1>
          </motion.div>
        </div>
        <div className="grid grid-cols-1   gap-8 mt-8 lg:grid-cols-2">
          <div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay:0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={Coolent1}
              alt=""
            />
            </motion.div>
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 rounded-md shadow  bg-gray-900">
              <a
                href="#"
                className="font-semibold  hover:underline text-white md:text-xl"
              >
                All the features you want to know
              </a>
              <p className="mt-3 text-sm  text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">21 October 2023</p>
            </div>
          </div>
          <div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={Cool}
              alt=""
            />
            </motion.div>
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 b rounded-md shadow bg-gray-900">
              <a
                href="#"
                className="font-semibold  hover:underline text-white md:text-xl"
              >
                 All the features you want to know
              </a>
              <p className="mt-3 text-sm  text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">20 October 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
