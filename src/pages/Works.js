import React from "react";
import { Link } from "react-router-dom";
import WorkCard from "../../chip/WorkCard";
import Navbar from "../Navbar"; // Replace with your Navbar component path
import Footer from "../Footer"; // Replace with your Footer component path
import data from "../data/data.js"; // Import project data

const Works = () => {
  const projects = data;

  return (
    <div className="full-works-page">
      {/* Navbar */}
      <Navbar highlightWorks /> // Pass a prop to highlight Works section

      {/* Main Content (adapt styles to match your main page aesthetics) */}
      <main className="main-content container mx-auto mt-16">
        {/* Project Listing */}
        <div className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project) => (
            <WorkCard key={project.title} project={project} />
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
