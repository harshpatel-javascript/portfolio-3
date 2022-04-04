import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Jashraj Joshi baba</span>
            </h1>
            <h2>
              a
              <span>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
              </span>
            </h2>
            <p>
              I am expert in analyzing the handwriting of people and tell them
              about their nature.
              <div className="hero_btn d_flex">
                <div className="col_1">
                  <h4>FIND WITH ME</h4>
                  <div className="button">
                    <button className="btn_shadow">
                      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                    </button>
                    <button className="btn_shadow">
                      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                    </button>
                    <button className="btn_shadow">
                      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                    </button>
                  </div>
                </div>
                <div className="col_1">
                  <h4>BEST SKILL ON</h4>
                  <button className="btn_shadow">
                    <img src={skill1} alt="" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skill2} alt="" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skill3} alt="" />
                  </button>
                </div>
              </div>
            </p>
            .
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
