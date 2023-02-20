import React from "react";
import styled from "styled-components";

const Logo = ({ styles }) => {
  return <LogoImg styles={styles} src="/images/logo.svg" />;
};

const LogoImg = styled.img`
  height: 39px;
  height: ${(props) => (props.styles === "footer" ? "24px" : "40px")};
`;

export default Logo;
