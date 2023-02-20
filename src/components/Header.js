import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo, Menu } from "./components_index";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/ " alt="logo">
        <Logo />
      </Link>
      <Menu menuStyles="normal" buttonStyles="normal" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 36vw; // 530px
  padding: var(--section-padding);
  padding-bottom: 1.3vh;
`;
