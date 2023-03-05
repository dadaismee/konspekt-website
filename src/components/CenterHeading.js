import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { heading2 } from "../styles/TextStyles";
import { cssForRombAnimation, mediaQueries } from "../styles/GlobalStyles";
import { RombCSS } from "./Animations";

const CenterHeading = ({ headingText, color, align }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      if (isScrolled !== hasScrolled) setHasScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <Wrapper align={align}>
      <FirstLine
        isAnimated={headingText.first.isAnimated}
        color={color}
        hasScrolled={hasScrolled}
      >
        <Heading
          isBold={headingText.first.isBold}
          isAnimated={headingText.first.isAnimated}
        >
          {headingText.first.title}
        </Heading>
      </FirstLine>
      <SecondLine
        isAnimated={headingText.second.isAnimated}
        color={color}
        hasScrolled={hasScrolled}
      >
        <Heading
          isBold={headingText.second.isBold}
          isAnimated={headingText.second.isAnimated}
        >
          {headingText.second.title}
        </Heading>
      </SecondLine>
      <ThirdLine
        isAnimated={headingText.third.isAnimated}
        color={color}
        hasScrolled={hasScrolled}
      >
        <Heading
          isBold={headingText.third.isBold}
          isAnimated={headingText.third.isAnimated}
        >
          {headingText.third.title}
        </Heading>
      </ThirdLine>
      <FourthLine
        isAnimated={headingText.fourth.isAnimated}
        color={color}
        hasScrolled={hasScrolled}
      >
        <Heading
          isBold={headingText.fourth.isBold}
          isAnimated={headingText.fourth.isAnimated}
        >
          {headingText.fourth.title}
        </Heading>
      </FourthLine>
    </Wrapper>
  );
};

export default CenterHeading;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  padding: var(--section-padding);
  place-content: center;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => (align === "center" ? "center" : "start")};
  }
`;

const Heading = styled(heading2)`
  font-weight: ${(props) => (props.isBold === true ? 700 : 500)};
  transform: ${(props) => (props.isAnimated === true ? "skew(20deg)" : "none")};
  /* background-color: red; */
`;

const FirstLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  ${({ isAnimated, color }) =>
    isAnimated === true ? cssForRombAnimation(color) : false};
  animation: ${({ hasScrolled }) => (hasScrolled === true ? RombCSS : false)};
  margin-bottom: -10px;
`;

const SecondLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  ${({ isAnimated, color }) =>
    isAnimated === true ? cssForRombAnimation(color) : false};
  animation: ${({ hasScrolled }) => (hasScrolled === true ? RombCSS : false)};
  margin-bottom: -10px;
`;

const ThirdLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 4;
  ${({ isAnimated, color }) =>
    isAnimated === true ? cssForRombAnimation(color) : false};
  animation: ${({ hasScrolled }) => (hasScrolled === true ? RombCSS : false)};
  margin-bottom: -10px;
`;

const FourthLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 4;
  grid-row-end: 4;
  grid-column-start: 4;
  grid-column-end: 4;
  ${({ isAnimated, color }) =>
    isAnimated === true ? cssForRombAnimation(color) : false};
  animation: ${({ hasScrolled }) => (hasScrolled === true ? RombCSS : false)};
  margin-bottom: -10px;
`;
