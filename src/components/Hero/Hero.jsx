import React from "react";
import "./Hero.css";
import Typed from "react-typed";
import coder from "../../assets/coder.svg";
import Button from "../Button/Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="Hero section">
      <div className="wrapper text-center relative">
        <h2 className="Hero__greeting">Shapon Pal</h2>
        <p className="Hero__name">I'm enthusiastic. I love to learn new things.</p>
        <h3 className="Hero__ocupation mb-2">
          I'm{" "}
          <Typed
            strings={[
              "<b>Full-stack developer</b>",
              "WordPress developer",
              "UI/UX designer",
              "Nodejs developer",
              "Javascript lover 💛",
              "Realtime application developer",
              "Python developer",
              "JavaScript Game developer",
            ]}
            typeSpeed={50}
            backDelay={3000}
            backSpeed={50}
            loop={true}
          />
        </h3>
        <div className="Hero__btn-container">
          <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}>
            <Button text="My services" faIcon="fa fa-fire" active="active" />
          </Link>
          <a href="https://github.com/shaponpal6" target="_blank">
            <Button text="See Repos" faIcon="fa fa-link" />
          </a>
        </div>
        <figure className="Hero__icon">
          <img src={coder} />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
