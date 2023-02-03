import React from "react";
import styled, { keyframes } from "styled-components";
import { bodyIntro, heading1, heading4, BodyText } from "../styles/TextStyles";
import { colors } from "../styles/ColorStyles";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <TaglineWrapper>
          <Tagline>
            Streamline your <br /> <span>research writing</span>
          </Tagline>
        </TaglineWrapper>
        <TextWrapper>
          <Subtext>
            with a <span>workflow</span> <br />
            that does the job <br />
            for you
          </Subtext>
          <Button>Enroll in a workshop</Button>
        </TextWrapper>
      </Wrapper>
      <PatternImage src="/images/graphics/pattern_bar.svg" />
    </>
  );
};

export default Hero;

const animation = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(10px);
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding: 167px 128px; // 15vh 4vw */
  padding: 15vh 4vw;
  gap: 8vw;
  background-color: ${colors.green80};
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 15vh 10vw;
  }
`;

const TaglineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.yellow100};
  height: 229px;
  width: 671px; // 4.6vw

  transform: skewX(160deg);
  box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);

  @media (max-width: 750px) {
    width: 75vw;
    height: 30vw;
  }
`;

const Tagline = styled(heading1)`
  transform: skewX(-160deg);

  span {
    color: ${colors.pink100};
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 2);
  gap: 35px;
  /* margin: 0px 120px; */

  @media (max-width: 750px) {
    gap: 3vh;
  }
`;

const Subtext = styled(heading4)`
  span {
    color: ${colors.pink100};
  }

  @media (max-width: 750px) {
    span {
      color: ${colors.textWhite};
    }
  }
`;

const Button = styled.button`
  width: 20vw;
  background-color: ${colors.pink100};
  border: none;
  padding: 20px;
  border-radius: 25px;
  text-align: center;
  color: ${colors.textWhite};
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 750px) {
    font-size: 20px;
  }
`;

const PatternImage = styled.img`
  width: 100%;
  height: 100%;
`;
