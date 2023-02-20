import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../styles/ColorStyles";
import { mediaQueries } from "../styles/GlobalStyles";
import { bodyText } from "../styles/TextStyles";
import { RombHover } from "./Animations";

const styles = {
  normal: {
    fontWeight: "700",
    textAlign: "right",
  },
  footer: {
    fontWeight: "500",
    textAlign: "left",
    fontSize: "16px",
  },
};

const MenuButton = ({ title, link, buttonStyles }) => {
  return (
    <>
      <Link to={link}>
        <MenuItemWrapper>
          <MenuItem buttonStyles={buttonStyles}>{title}</MenuItem>
        </MenuItemWrapper>
      </Link>
    </>
  );
};

export default MenuButton;

const MenuItemWrapper = styled(RombHover)`
  color: ${colors.textBlack};

  @media (max-width: ${mediaQueries.tablet}) {
    ${(props) => (props.styles === "footer" ? styles.footer : styles.normal)}
  }
`;

const MenuItem = styled(bodyText)`
  transform: skewX(20deg);
  ${(props) =>
    props.buttonStyles === "footer" ? styles.footer : styles.normal}
`;
