importunity React from "react";
import { useState } from 'react';

const certifications = [
  {
    title: 'Introduction to Machine Learning',
    provider: 'Coursera',
    issuedDate: 'Issued Oct 2022',
  },
  {
    title: 'Introduction to NoSQL Databases Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Oct 2022',
  },
  {
    title: 'Building AI powered chatbots without programming Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Apr 2022',
  },
  {
    title: 'Machine Learning Foundations: A Case Study Approach Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Mar 2022',
  },
  {
    title: 'Getting Started with AI using IBM Watson Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Feb 2022',
  },
  {
    title: 'Basic Data Descriptors, Statistical Distributions, and Application to Business Decisions Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Dec 2021',
  },
  {
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    provider: 'Coursera',
    issuedDate: 'Issued Apr 2023',
  },
  {
    title: 'Machine Learning with Python Graphic',
    provider: 'Coursera',
    issuedDate: 'Issued Apr 2023',
  },
  // Add more certifications here...
];
function temp(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}
const cert = temp(`<div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
<h1 className="text-[1.4rem] font-semibold sm:text-xl">
course
</h1>
<span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
provider
</span>
<span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
date
</span>
</div>`)

const Resume = () => {
    const [showAllCertifications, setShowAllCertifications] = useState(false);
    const certificationElements = certifications.map((certification, index) => (
        <div
          key={index}
          className={`flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg ${
            !showAllCertifications && index >= 3 ? 'hidden' : ''
          }`}
        >
          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
            {certification.title}
          </h1>
          <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
            {certification.provider}
          </span>
          <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
            {certification.issuedDate}
          </span>
        </div>
      ));
    
    return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my Certifications and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Cerrtificates
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              {certificationElements}
            </div>
            <button
        className="text-blue-500 hover:underline"
        onClick={() => setShowAllCertifications(!showAllCertifications)}
      >
        {showAllCertifications ? "Show Less" : "Show All"}
      </button>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science and Engineering With Specialization In Artificial Intelligence AND Machine learning.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Noida Institute Of Engineering and Technology
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Gained expertise in programming languages like Python, Java, and frameworks such as TensorFlow through a rigorous curriculum. Developed strong skills in data engineering, visualization, and natural language processing. Participated in AI/ML projects and competitions to apply theoretical concepts practically. Demonstrated commitment to continuous learning through industry-recognized certifications in AI/ML domains.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;