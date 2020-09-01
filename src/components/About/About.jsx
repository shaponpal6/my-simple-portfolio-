import React from "react";
import "./About.css";
import image from "../../assets/about.jpg";
import NetworkList from "../NetworkList/NetworkList";

const About = (props) => {
  return (
    <section className="About">
      <div className="wrapper">
        <div className="About__info">
          <h3 className="About__title mb-2">About Me</h3>
          <p className="mb-3">
            Hi, I'm Shapon Pal, Full-Stack Web Developer.
            <br />
            <br />
            I’m a full stack developer with over 7 years of full time working
            experience. My working history starts in 2014 since that time I
            worked in many roles and teams from startups to lead dev position in
            a big enterprise company. During that time I was always thirsty to
            learn and try new things, new tech stacks and understand different
            approaches of development.
            <br />
            <br />
            My Skills and experiences on PHP, JavaScript, python, Node JS,
            WordPress, React, Webpack, Redux, Android, MySQL, MongoDB, Firebace,
            socket.io, webRTC, Laravel, Django, Codeigniter etc. <br />
            <br />
            I'm enthusiastic. I love to learn new things.
          </p>
          <NetworkList />
        </div>
        <figure className="About__logo">
          <img src={image} alt="about-logo" />
        </figure>
      </div>
    </section>
  );
};

export default About;
