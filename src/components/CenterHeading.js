import React from "react";
import styled from "styled-components";
import { heading2 } from "../styles/TextStyles";
import { RombAnimation } from "./Animations";
import { colors } from "../styles/ColorStyles";
import { cssForRombAnimation } from "../styles/GlobalStyles";

const CenterHeading = ({ headingText }) => {
  return (
    <Wrapper>
      <FirstLine>
        <Heading
          isBold={headingText.first.isBold}
          isAnimated={headingText.first.isAnimated}
        >
          {headingText.first.title}
        </Heading>
      </FirstLine>
      <SecondLine>
        <Heading
          isBold={headingText.second.isBold}
          isAnimated={headingText.second.isAnimated}
        >
          {headingText.second.title}
        </Heading>
      </SecondLine>
      <ThirdLine isAnimated={headingText.third.isAnimated}>
        <Heading
          isBold={headingText.third.isBold}
          isAnimated={headingText.third.isAnimated}
        >
          {headingText.third.title}
        </Heading>
      </ThirdLine>
      <FourthLine>
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
  place-items: center;
`;

const Heading = styled(heading2)`
  font-weight: ${(props) => (props.isBold === true ? 700 : 500)};
  transform: ${(props) => (props.isAnimated === true ? "skew(20deg)" : "none")};
  line-height: 35px;
`;

const FirstLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const SecondLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const ThirdLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 4;
  ${(props) => (props.isAnimated === true ? cssForRombAnimation : "none")};
`;

const FourthLine = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  inline-size: max-content;
  grid-row-start: 4;
  grid-row-end: 4;
  grid-column-start: 4;
  grid-column-end: 4;
`;
