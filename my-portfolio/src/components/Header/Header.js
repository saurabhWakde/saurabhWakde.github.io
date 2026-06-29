import React from "react";
import { Resume2 } from "../Resume/Resume";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <Nav id="nav-menu">
      <Logo to="/">
        <h1 className="nav-link home">Saurabh</h1>
      </Logo>
      <NavMenu>
        <NavLink className="menu-item nav-link about" to="about" smooth={true}>
          About
        </NavLink>
        <NavLink
          id="skills"
          className="menu-item nav-link skills"
          to="#skills"
          smooth={true}
        >
          Skills
        </NavLink>
        <NavLink
          className="menu-item nav-link projects"
          to="projects"
          smooth={true}
        >
          Projects
        </NavLink>
        <NavLink
          className="menu-item nav-link contact"
          to="contact"
          smooth={true}
        >
          Contact
        </NavLink>
      </NavMenu>
      <div id="resume-button-1">
        <NavBtn className="nav-link resume">
          <Resume2
            className="nav-link resume"
            id="resume-link-1 resume-button-1"
          />
        </NavBtn>
      </div>

      <Bars onClick={toggle} />
    </Nav>
  );
};

export default Header;
