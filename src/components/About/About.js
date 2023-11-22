import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  Card,
} from "./AboutElements";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <ContactWrapper id="about" className="about section">
        <div className="Container">
          <div className="SectionTitle" style={{ "margin-top": "100px" }}>
            About Me
          </div>
          <Card className="BigCard">
            <Image
              src="https://contentstatic.techgig.com/photo/88751917.cms"
              alt="man-svgrepo"
            />
            <div className="AboutBio" id="user-detail-name">
              {/* <ul> */}
              <li id="user-detail-name">
                Hello! My name is <strong>Saurabh Wakde </strong>and I find
                great joy in crafting digital creations that thrive on the vast
                landscape of the internet.
              </li>
              <br />
              <li id="user-detail-intro">
                My expertise spans across HTML5, CSS3, JavaScript, ReactJs,
                NodeJs, Express, and I'm well-versed in working with database
                technologies like MongoDB
              </li>
              <br />
              <li id="user-detail-intro">
                Throughout my journey, I have successfully constructed numerous
                web applications and completed four significant projects. These
                experiences have not only enhanced my technical prowess but also
                imparted invaluable lessons in teamwork, leadership, and
                effective communication. Now, after undergoing months of
                rigorous training, I am eagerly seeking an opportunity to
                contribute as a full stack web developer.
              </li>
            </div>
          </Card>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
