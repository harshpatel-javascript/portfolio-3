import React from "react";
import "./Education.css";
import EducationApi from "./EducationApi";
import Card from "./Card";
const Education = () => {
  return (
    <>
      <section className="Education" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>7+ YEARS OF EXPERIENCE</h4>
            <h1>My Education and Experiences</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Education Quality</h1>
              </div>

              <div className="content">
                {EducationApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Job Experience</h1>
              </div>

              <div className="content">
                {EducationApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
