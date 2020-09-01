import React from 'react';
import './Home.css';
import Hero from '../../Hero/Hero';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import NavBar from '../../NavBar/NavBar';

const Home = () => {
    return (
      <div className="Home relative">
        <NavBar/>
        <Hero id="Hero" />
        <Services id="Services" />
        {/* <Skills id="Skills" /> */}
        <About id="About" />
        <Projects id="Projects" />
        <Contact id="Contact" />
        <Footer id="Footer" />
      </div>
    );
}

export default Home;
