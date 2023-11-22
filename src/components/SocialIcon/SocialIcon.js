import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import styled from "styled-components";

export const SocialDiv = styled.div`
  // margin-top: 2rem;
  // display: none;
  // ul {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   list-style: none;
  // }

  // a {
  //   font-size: 2.5rem;
  //   color: #151418;
  //   transition: 0.2s ease-in;
  //   &:hover {
  //     color: rgb(57, 134, 250);
  //   }
  // }

  // .item + .item {
  //   margin-left: 2rem;
  // }

  // @media screen and (max-width: 768px) {
  //   display: block;
  // }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/pratik-mate-a6a62919b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/PratikMate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="mailto:pratikm470@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
