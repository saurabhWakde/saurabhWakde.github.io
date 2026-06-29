import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Skills from "../components/Skills/Skills";
import { Github } from "../components/Github-stats/Github";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
};

export default Home;
