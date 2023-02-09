import React from "react";
import styled, { keyframes } from "styled-components";
import { bodyIntro, heading1, heading4, BodyText } from "../styles/TextStyles";
import { colors } from "../styles/ColorStyles";
import { mediaQueries } from "../styles/GlobalStyles";

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
    transform: translateX(10px) ;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 15vh 0vw; // 167px 128px // 15vh 4vw
  background-color: ${colors.green80};
  align-items: center;

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr;
    gap: 4vh;
    padding: 15vh 0vw;
  }
`;

const TaglineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-color: ${colors.yellow100};
  height: 17vw;
  width: 46vw;
  /* animation: ${animation} 0.5s forwards; */
  /* height: 229px; */
  /* width: 671px; */

  transform: skewX(160deg);
  box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);

  @media (max-width: ${mediaQueries.tablet}) {
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
  gap: 2vw; // 35px

  @media (max-width: ${mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Subtext = styled(heading4)`
  span {
    color: ${colors.pink100};
  }

  @media (max-width: ${mediaQueries.tablet}) {
    line-height: 120%;
    span {
      color: ${colors.textWhite};
    }
  }
`;

const Button = styled.button`
  width: 20vw;
  background-color: ${colors.pink100};
  border: none;
  padding: 1.3vw; //20px
  border-radius: 25px;
  text-align: center;
  color: ${colors.textWhite};
  font-weight: 700;
  font-size: 1.6vw; //24px

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 2.4vw;
  }
`;

const PatternImage = styled.img`
  width: 100%;
  height: 100%;
`;
