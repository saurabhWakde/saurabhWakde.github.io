import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillsElements";
function Skills() {
  return (
    <>
      <ContactWrapper id="#skills">
        <div className="Container">
          <div
            className="SectionTitle"
            style={{ "margin-top": "50px", "margin-bottom": "0.5rem" }}
          >
            Skills
          </div>
          <div className="skills-card BigCard ">
            <Technologies>
              {stackList.map((stack, index) => (
                <div
                  key={index}
                  //  className="skills-card"
                >
                  <Tech
                  // className="skills-card"
                  // id="skills-card"
                  >
                    <TechImg
                      className="skills-card-img"
                      src={stack.img}
                      alt={stack.name}
                    />
                    <TechName className="skills-card-name">
                      {stack.name}
                    </TechName>
                  </Tech>
                </div>
              ))}
            </Technologies>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default Skills;
