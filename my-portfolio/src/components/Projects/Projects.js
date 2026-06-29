import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "styled-components"
import { Wrapper } from "./ProjectCard/ProjectCardElements";
function Projects() {
  return (
    <>
      <Wrapper
        className="ProjectWrapper"
        id="projects"
        style={{ "margin-top": "50px" }}
      >
        <div className="Container">
          <div className="SectionTitle" style={{ "margin-bottom": "0.5rem" }}>
            Projects
          </div>
          <ProjectCard className="project-card" />
        </div>
      </Wrapper>
    </>
  );
}

export default Projects;
