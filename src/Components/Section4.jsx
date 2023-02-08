import React from "react";
import Case from "../Images/Case.jpg";
import Case2 from "../Images/Case2.png";
import  About1 from "../Images/About1.jpg"
import  About3 from "../Images/About3.png"

const Section4 = () => {
  return (
    <section className="px-7 md:px-10 py-10 bg-gray-300 text-gray-900">
      <h1 className="  text-xl md:text-4xl text-center font-medium mb-8">
        {" "}
        Cutting Tool Engineering Magazine <br />{" "}
        <span className="text-blue-700"> Case Study</span>{" "}
      </h1>
      <div className="container grid grid-cols-12 mx-auto gap-y-2 md:gap-5">
       
      <div className="relative md:hidden flex items-center justify-center col-span-12  bg-center  xl:col-span-6 lg:col-span-5 md:col-span-9 ">
          <img
            className=" shadow-xl  border-black border-4 md:w-[50%]"
            src={Case}
          ></img>
        </div> <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 text-gray-600">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-400"></span>
                <span className="text-xs font-bold tracking-wider uppercase">
                  Exclusive
                </span>
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </a>
              <p className="text-xs text-gray-400">
                47 minutes ago by
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-blue-800"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 text-gray-600">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-400"></span>
                <span className="text-xs font-bold tracking-wider uppercase">
                  Exclusive
                </span>
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </a>
              <p className="text-xs text-gray-400">
                2 hours ago by 
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-blue-800"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 text-gray-600">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-400"></span>
                <span className="text-xs font-bold tracking-wider uppercase">
                  Exclusive
                </span>
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry..
              </a>
              <p className="text-xs text-gray-400">
                4 hours ago by
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline :text-blue-800"
                >
                   Leroy Jenkins
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 bg-blue-700">
              <div className="w-1/2 h-full bg-black"></div>
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold tracking-wider uppercase">
                See more exclusives
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 strokeCurrent text-blue-400"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative hidden md:flex  flex items-center justify-center col-span-12  bg-center  xl:col-span-6 lg:col-span-5 md:col-span-9 ">
          <img
            className="  border border-black border-[6px] rounded-lg lg:w-[60%] md:w-[50%]"
            src={Case}
          ></img>
        </div>
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-blue-700">
            <button
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 border-blue-700"
            >
              Latest
            </button>
            <button
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-400"
            >
              Popular
            </button>
          </div>
          <div className="flex flex-col divide-y divide-gray-700">
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                src="https://www.tribonet.org/wp-content/uploads/2022/06/Coolants-1.jpg"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Aenean ac tristique lorem, ut mollis dui.
                </a>
                <p className="mt-auto text-xs text-gray-400">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                  >
                    Politics
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                src={About3}
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </a>
                <p className="mt-auto text-xs text-gray-400">
                  14 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                  >
                    Sports
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                src={About1}      
                        />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Vitae semper augue purus tincidunt libero.
                </a>
                <p className="mt-auto text-xs text-gray-400">
                  22 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                  >
                    World
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                src="https://source.unsplash.com/random/247x327"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Suspendisse potenti.
                </a>
                <p className="mt-auto text-xs text-gray-400">
                  37 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                  >
                    Business
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section4;
