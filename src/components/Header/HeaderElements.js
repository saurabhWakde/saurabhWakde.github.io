import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  background: black;
  align-items: center;
  height: 70px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  gap: 30px;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled(LinkRouter)`
  h1 {
    font-size: 1.8rem;
    color: #fff;
    border: 1px solid white;
    padding: 5px 10px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
