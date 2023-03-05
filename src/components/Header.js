import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Logo, Menu } from "./components_index";
import { mediaQueries } from "../styles/GlobalStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleClickOutside(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link to="/" alt="logo">
        <Logo />
      </Link>
      <Menu
        menuStyles="normal"
        buttonStyles="normal"
        isOpen={isOpen}
        handleClick={handleClick}
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${({ isOpen }) => (isOpen ? "0px" : "36vw")}; // 530px
  padding: var(--section-padding);
  z-index: 1;

  @media (max-width: ${mediaQueries.tablet}) {
    padding: var(--section-padding);
    justify-content: space-between;
  }
`;
