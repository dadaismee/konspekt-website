import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyles";

const PatternImage = () => {
  const [scrolled, setScrolled] = useState(101);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight / 3) setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return <Wrapper scrolled={scrolled} src="/images/graphics/pattern_bar.svg" />;
};

export default PatternImage;

const Wrapper = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: ${mediaQueries.tablet}) {
    height: ${(props) => props.scrolled};
  }
`;
