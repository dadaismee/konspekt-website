import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyles";

const Logo = ({ styles }) => {
  return <LogoImg styles={styles} src="/images/logo.svg" />;
};

const LogoImg = styled.img`
  /* height: 24px; */
  height: ${(props) => (props.styles === "footer" ? "24px" : "40px")};

  @media (max-width: ${mediaQueries.tablet}) {
    height: 2.77vw;
  }

  @media (max-width: ${mediaQueries.phone}) {
    height: 32px;
  }
`;

export default Logo;
