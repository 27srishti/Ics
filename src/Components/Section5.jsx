import React, { useState } from "react";
import Cool from "../Images/Cool.jpg";
const Section5 = () => {
  return (
    <section className="bg-white pb-10 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl mb-14 font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
            Introducing our new <br />{" "}
            <span className="text-blue-400">Adaptive Pressure Control</span> and {" "}
            <span className="text-blue-400"> Coolant Filtration System</span>
          </h1>
        </div>
        <div className="grid grid-cols-1   gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="http://www.industrialcoolantsystems.com/uploads/2/4/3/3/24335298/9748358_orig.jpg"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                All the features you want to know
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">21 October 2023</p>
            </div>
          </div>
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={Cool}
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                 All the features you want to know
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
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
