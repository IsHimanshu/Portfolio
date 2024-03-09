import React from "react";
import { Link } from "react-router-dom";
import WorkCard from "../../chip/WorkCard";
import {data} from "../../data/data";


const Work = () => {
  const reversedData = [...data].reverse().slice(0, 3);
  return (
    <div>
      <div id="works" className="container m-auto mt-16">
        {/* heading */}
        <div 
          data-aos="fade-up"
          className="relative mb-5"
        >
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        <div 
          data-aos="fade-up"
          className="left flex-1 w-full"
        >
          <p className="text-gray-700 font-medium w-[100%]">
            Here are some of my works.
          </p>
        </div>
        {/* card */}
        <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
          <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
            {reversedData.map((item) => (
              <WorkCard key={item.id} item={item} /> // Call WorkCard with each project's data
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/Works" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
          See All Works
        </Link>
      </div>
    </div>
  );
};

export default Work;
