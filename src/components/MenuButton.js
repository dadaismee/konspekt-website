import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../styles/ColorStyles";
import { mainShadow, mediaQueries } from "../styles/GlobalStyles";
import { bodyText } from "../styles/TextStyles";
import { RombHover } from "./Animations";

const MenuButton = ({ title, link }) => {
  return (
    <>
      <Link to={link}>
        <MenuItemWrapper>
          <MenuItem>{title}</MenuItem>
        </MenuItemWrapper>
      </Link>
    </>
  );
};

export default MenuButton;

const MenuItemWrapper = styled(RombHover)`
  color: ${colors.textBlack};

  @media (max-width: ${mediaQueries.tablet}) {
    text-align: right;
    font-weight: 500;
  }
`;

const MenuItem = styled(bodyText)`
  font-weight: 700;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: skewX(20deg);
`;
