import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { menuItems } from "../data/menuItems";
import MenuButton from "./MenuButton";
import { mediaQueries } from "../styles/GlobalStyles";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/ " alt="logo">
        <Logo src="/images/logo.svg" />
      </Link>
      <MenuWrapper count={menuItems.length}>
        {menuItems.map((item, index) => (
          <MenuButton title={item.title} key={index} link={item.link} />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 36vw; // 530px
  padding: 2.7vh 7vw 1.3vh; // 30px 112px 15px

  /* @media (max-width: ${mediaQueries.tablet}) {
    display: grid;
    grid-template-rows: auto auto;
  } */
`;

const Logo = styled.img`
  height: 39px;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 3vw;
  place-items: end;

  @media (max-width: ${mediaQueries.tablet}) {
    display: block;
  }
`;
