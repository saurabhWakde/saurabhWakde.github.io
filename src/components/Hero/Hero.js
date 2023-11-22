import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/pic.jpg";
import { Resume2 } from "../Resume/Resume";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  NavBtn,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper id="home">
          <HeroLeft>
            <h1>Hi, I'm Saurabh Wakde</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              My passion lies in creating elegantly simple designs and writing
              clean code. I find immense joy in the work I do and take pride in
              my abilities.
            </p>
          </HeroLeft>
          <HeroRight>

            <Image className="home-img" src={profile} alt="man-svgrepo" />
          </HeroRight>
        </HeroWrapper>

        <NavBtn id="resume-button-2 resume-link-2" className="">
          <Resume2 id="resume-link-2 resume-button-2" />
        </NavBtn>
      </HeroContainer>
    </main>
  );
}

export default Hero;
