import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import classes from "./Hamburger.module.css";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
}

;

const MenuLabel = styled.label`
background: rgb(7,33,66);
background: linear-gradient(90deg, rgba(7,33,66,1) 0%, rgba(140,43,122,1) 55%, rgba(255,77,90,1) 100%);
  position: fixed;
  top:0;
  right: 0%;
  box-shadow:5%;
  height: 5rem;
  width: 100%;
  cursor: pointer;
  z-index: 1000;
  
  text-align: center;
  
`;


const NavBackground = styled.div`
  position: fixed;
  top: 0;
  right: 45%;
  height: 5rem;
  width: 5rem;
  background: rgb(7,33,66);
  background: linear-gradient(90deg, rgba(7,33,66,1) 14%, rgba(140,43,122,1) 53%, rgba(255,77,90,1) 82%);  
  border-radius:40%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(19)" : "scale(0)")};
  transition: transform 0.5s;
 
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }

`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: pink;
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
 
`;



function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
    <div className={classes.listitems}>
      <MenuLabel class="navi-toggle" onClick={handleClick} >
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List className={classes.listitems}>
          <li>
            <ItemLink onClick={handleClick} to="/">
             Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/aboutme">
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/skills">
              Skills
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/projects">
              Projects
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact Us
            </ItemLink>
          </li>
        </List>
      </Navigation>
      </div>
    </>
  );
}

export default HamburgerMenu;
