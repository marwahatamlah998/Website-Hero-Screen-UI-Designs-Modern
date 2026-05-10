import React from "react";
import "./about-me.css";
import Navbar from "../components/Navbar";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="about-me">
          {/*  */}
          <h1 className="one">
            About Me<span className="dot">.</span>
          </h1>
          <img className="two" src="\images\img_about_me_1.jpg" alt="image" />
          <img className="three" src="\images\img_about_me_2.jpg" alt="image" />
          <div className="four">
            <h3>Get to know us </h3>
            <p className="about-me-text">
              I'm Marwa, Full-Stack web Engineer.I focusing on building digital
              systems powered by React , Next JS, content strategy, and modern
              UIs design. The aim is to develop efficient workflows, scalable
              digital products, and practical solutions for the digital economy.
              This page shares the progress as the my skills continues to grow and
              evolve.
            </p>
          </div>
        </div>
        <div className="big-dream-container">
          <div className="line"> </div>
          <div className="big-dream">Big Dream </div>
          <div className="my-big-dream">
          WORK HARD, STAY FOCUSED AND SURROUNDED YOURSELF WITH GOOD PEOPLE.
          CHELOIRE
        </div>
        </div>
        
        <section className="mission">
          <div className="m">M</div>
          <div className="text">
            A full-stack engineering and quality-driven focused on
            building reliable, scalable, and user-centered digital systems. The
            mission is to combine technical skills with thoughtful design to
            create seamless web experiences powered by modern technologies such
            as React, Next.js, and robust backend architectures. With a strong
            foundation in QA and three years of experience across diverse
            projects, the approach emphasizes not only functionality but also
            stability, performance, and long-term maintainability. Every product
            is crafted with attention to detail, ensuring clean workflows,
            efficient systems, and a smooth user experience. The goal is to
            develop digital solutions that are both technically strong and
            human-focused—bridging engineering excellence with practical
            real-world impact, while continuously evolving with modern web
            standards and best practices.
          </div>
        </section>
        <div className="thanks-container">
          <div className="thank-you">Thanks </div>
        </div>{" "}
      </div>
    </>
  );
};

export default AboutMe;
