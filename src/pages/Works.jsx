import React from "react";
import { Link } from "react-router-dom";
import WorkCard from "../chip/WorkCard";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import {data} from "../data/data";

const Works = () => {
  const reversedData = data.reverse();

  return (
    <div className="full-works-page">
      {/* Navbar */}
      <NavBar />

      {/* Main Content (adapt styles to match your main page aesthetics) */}
      <main className="main-content container mx-auto mt-16">
        {/* Project Listing */}
        <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
            {reversedData.map((item) => (
              <WorkCard key={item.id} item={item} /> // Call WorkCard with each project's data
            ))}
        </div>

        {/* Basic Page Navigation (replace with your implementation) */}
        <div className="pagination-wrapper flex justify-center mt-10">
          <button className="prev-btn disabled">Previous</button>
          <button className="next-btn">Next</button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Works;
