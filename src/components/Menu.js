import React from "react";
import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import { mediaQueries } from "../styles/GlobalStyles";
import { MenuButton } from "./components_index";

const MenuWrapStyle = {
  normal: {
    display: "grid",
    gridTemplateColumns: `repeat(5, auto)`,
    placeItems: "end",
    gap: "3vw",
  },
  footer: {
    display: "grid",
    gridTemplateRows: `repeat(5, auto)`,
    placeItems: "start",
  },
};

const Menu = ({ menuStyles, buttonStyles }) => {
  return (
    <MenuWrapper menuStyles={menuStyles} count={menuItems.length}>
      {menuItems.map((item, index) => (
        <MenuButton
          buttonStyles={buttonStyles}
          title={item.title}
          key={index}
          link={item.link}
        />
      ))}
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  ${(props) =>
    props.menuStyles === "footer" ? MenuWrapStyle.footer : MenuWrapStyle.normal}

  @media (max-width: ${mediaQueries.tablet}) {
    display: ${(props) => (props.menuStyles === "footer" ? "block" : "none")};
  }
`;
