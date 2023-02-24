import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CenterHeading, MainText } from "./components_index";

const TextSection = ({ headingText, mainText, color }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== hasScrolled) setHasScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <Wrapper>
      <CenterHeading
        headingText={headingText}
        color={color}
        hasScrolled={hasScrolled}
      />
      <MainText
        image={mainText.image}
        tagline={mainText.tagline}
        text={mainText.text}
      />
      <ActionList />
    </Wrapper>
  );
};

export default TextSection;

const Wrapper = styled.div`
  display: grid;
  gap: 4vh;
  padding: 4.1vw 7.7vw; //var(--section-padding);
`;

const ActionList = styled.ol``;
