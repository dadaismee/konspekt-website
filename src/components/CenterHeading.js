import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { heading2 } from '../styles/TextStyles';
import { cssForRombAnimation, mediaQueries } from '../styles/GlobalStyles';
import { RombCSS } from './Animations';

const CenterHeading = ({ headingText, color, align }) => {
  function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      // return () => {
      //   observer.unobserve(ref.current);
      // };
    }, []);
    return isIntersecting;
  }

  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px');

  return (
    <Wrapper align={align}>
      <FirstLine
        isAnimated={headingText.first.isAnimated}
        color={color}
        hasScrolled={onScreen}
        ref={ref}
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
        hasScrolled={onScreen}
        ref={ref}
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
        hasScrolled={onScreen}
        ref={ref}
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
        hasScrolled={onScreen}
        ref={ref}
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
  margin-top: 1.38vw;
  margin-bottom: -0.69vw;
  place-content: center;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    /* align-items: ${({ align }) =>
      align === 'center' ? 'center' : 'start'}; */
  }
`;

const Heading = styled(heading2)`
  font-weight: ${(props) => (props.isBold === true ? 700 : 500)};
  transform: ${(props) => (props.isAnimated === true ? 'skew(20deg)' : 'none')};
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

  @media (max-width: ${mediaQueries.phone}) {
    margin-bottom: 0;
  }
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

  @media (max-width: ${mediaQueries.phone}) {
    margin-bottom: 0;
  }
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

  @media (max-width: ${mediaQueries.phone}) {
    margin-bottom: 0;
  }
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

  @media (max-width: ${mediaQueries.phone}) {
    margin-bottom: 0;
  }
`;
