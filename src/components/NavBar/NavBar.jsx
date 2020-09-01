import React from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const handleClick = () => {
    const btnNav = document.querySelector("#btn-navbar");
    btnNav.classList.toggle("active");
  };

  const handleScrollTop = () => {
    Scroll.scrollToTop();
    const btnNav = document.querySelector("#btn-navbar");
    btnNav.classList.toggle("active");
  }

  return (
    <div className="NavBar">
      <button
        className="fa fa-bars NavBar__button"
        id="btn-navbar"
        onClick={handleClick}
      ></button>
      <nav className="relative">
        <a onClick={handleScrollTop} duration={500} className="mb-2">Welcome</a>
        <Link to="Services" onClick={handleClick} smooth={true} duration={500} className="mb-2">Services</Link>
        <Link to="About" onClick={handleClick} smooth={true} duration={500} className="mb-2">About Me</Link>
        <Link to="Project" onClick={handleClick} smooth={true} duration={500} className="mb-2">Projects</Link>
        <Link to="Contact" onClick={handleClick} smooth={true} duration={500} className="mb-2">Contact Me</Link>
      </nav>
    </div>
  );
};

export default NavBar;
