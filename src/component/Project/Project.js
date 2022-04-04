import React from "react";
import "./Project.css";
import ProjectCard from "../../Projectcard";
import Project_data from "./Project_data";

const Project = () => {
  return (
    <>
      <section className="Project top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>VISIT MY PROJECT AND KEEP YOUR FEEDBACK</h4>
            <h1>My Projects</h1>
          </div>

          <div className="content grid">
            {Project_data.map((value, index) => {
              return (
                <ProjectCard
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
