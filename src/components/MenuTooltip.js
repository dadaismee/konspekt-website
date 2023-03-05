import React from "react";
import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import { colors } from "../styles/ColorStyles";
import { mainShadow } from "../styles/GlobalStyles";
import { MenuButton } from "./components_index";
import { mediaQueries } from "../styles/GlobalStyles";

const styles = {
  button: {
    gridTemplateColumns: "10px",
    height: "40px",
    borderRadius: "10px",
    color: `${colors.pink80}`,
    placeContent: "center",
  },
  menu: {
    gridTemplateColumns: "80px",
    height: `${window.innerWidth >= mediaQueries.phone ? "140px" : "120px"}`,
    borderRadius: "25px",
  },
};

const MenuTooltip = ({ isOpen, handleClick }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={handleClick}>
      {menuItems.map((item, index) => (
        <MenuButton title={item.title} link={item.link} key={index} />
      ))}
    </Wrapper>
  );
};

export default MenuTooltip;

const Wrapper = styled.div`
  ${(props) => (props.isOpen ? styles.menu : styles.button)}

  display: grid;
  background-color: ${({ isOpen }) =>
    isOpen ? colors.green100 : colors.green80};
  padding: 15px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: ${mainShadow};
  z-index: 1;

  > a {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;
