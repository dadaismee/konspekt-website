import React from "react";
import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import { mediaQueries } from "../styles/GlobalStyles";
import { MenuButton, MenuTooltip } from "./components_index";

const MenuWrapStyle = {
  normal: {
    display: "grid",
    gridTemplateColumns: `repeat(${menuItems.length}, auto)`,
    placeItems: "end",
    // gap: "3vw",
  },
  footer: {
    display: "grid",
    gridTemplateRows: `repeat(5, auto)`,
    placeItems: "start",
  },
};

const Menu = ({ menuStyles, buttonStyles }) => {
  return (
    <MenuWrapper menuStyles={menuStyles}>
      {menuItems.map((item, index) => (
        <MenuButton
          title={item.title}
          link={item.link}
          buttonStyles={buttonStyles}
          key={index}
        />
      ))}
      <HamburgerWrapper menuStyles={menuStyles}>
        <MenuTooltip />
      </HamburgerWrapper>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  ${({ menuStyles }) =>
    menuStyles === "footer" ? MenuWrapStyle.footer : MenuWrapStyle.normal}

  @media (max-width: ${mediaQueries.tablet}) {
    > a {
      display: ${(props) => (props.menuStyles === "footer" ? "block" : "none")};
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: ${mediaQueries.tablet}) {
    display: ${(props) => (props.menuStyles === "footer" ? "none" : "block")};
  }
`;
