import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index} className="project-card">
          <CardLeft>
            <img src={list.img} alt={list.name}/>
          </CardLeft>
          <CardRight>
            <h4 className="project-title">{list.title}</h4>
            <p className="project-description">{list.description}</p>
            <Stack>
              <span className="stackTitle project-tech-stack">
                Tech Stack -
              </span>
              <span className="tags project-tech-stack">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn project-github-link"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn project-deployed-link"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
