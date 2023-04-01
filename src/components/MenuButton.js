import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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

const MenuButton = ({ link, title, buttonStyles, soon }) => {
  return (
    <>
      <Link to={link}>
        <MenuItemWrapper>
          {soon && <Flag buttonStyles={buttonStyles}>soon</Flag>}
          <MenuItem soon={soon} buttonStyles={buttonStyles}>
            {title}
          </MenuItem>
        </MenuItemWrapper>
      </Link>
    </>
  );
};

export default MenuButton;

const MenuItemWrapper = styled(RombHover)`
  @media (max-width: ${mediaQueries.tablet}) {
    ${(props) => (props.styles === "footer" ? styles.footer : styles.normal)}
  }
`;

const Flag = styled.p`
  color: #a5a5a5;
  text-align: right;
  font-size: 13px;
  font-weight: 700;
  transform: skewX(20deg);
  margin: 0 8% -5px 0;
  ${(props) =>
    props.buttonStyles === "footer" ? "display: none" : "display: block"};
`;

const MenuItem = styled(bodyText)`
  transform: skewX(20deg);
  ${(props) => (props.soon === true ? "color: #A5A5A5" : "color: black")};

  ${(props) =>
    props.buttonStyles === "footer" ? styles.footer : styles.normal};
`;
