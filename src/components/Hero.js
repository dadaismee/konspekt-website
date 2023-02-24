import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { heading1, heading4 } from "../styles/TextStyles";
import { colors } from "../styles/ColorStyles";
import { mainShadow, mediaQueries } from "../styles/GlobalStyles";
import { opacityAnimation, RombOpacityAnimation } from "./Animations";

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
          <Link to="/course">
            <Button>Enroll in a workshop</Button>
          </Link>
        </TextWrapper>
      </Wrapper>
      <PatternImage src="/images/graphics/pattern_bar.svg" />
    </>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 15vh 4vw; // 167px 128px // 15vh 4vw
  background-color: ${colors.green60};

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr;
    padding: 10vh 4vw; // 167px 128px // 15vh 4vw
    gap: 4vh;
  }

  @media (max-width: ${mediaQueries.phone}) {
    /* grid-template-columns: 1fr; */
    /* padding: 10vh 4vw; // 167px 128px // 15vh 4vw */
    gap: 6vh;
  }
`;

const TaglineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-image: linear-gradient(
    to right,
    ${colors.yellow100} 100%,
    ${colors.yellow40} 100%
  );
  background-repeat: no-repeat;
  width: 46vw;
  height: 18vw;

  transform: skewX(160deg);
  animation: ${RombOpacityAnimation};
  opacity: 0;
  animation-delay: 0.25s;

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
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-content: center;
  /* gap: 2vw; // 35px */

  @media (max-width: ${mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0;
    justify-content: space-evenly;
    align-items: stretch;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 20px;
  }
`;

const Subtext = styled(heading4)`
  opacity: 0;
  animation: ${opacityAnimation};
  animation-delay: 1.5s;

  span {
    color: ${colors.pink100};
  }

  @media (max-width: ${mediaQueries.tablet}) {
    line-height: 120%;
    span {
      color: ${colors.textWhite};
    }
  }
  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
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
  font-size: 1.6vw; //24px // 1.6vw
  transition: all 0.25s;
  opacity: 0;
  animation: ${opacityAnimation};
  animation-delay: 2s;

  :hover {
    /* color: ${colors.textBlack}; */
    transform: translateY(-5px);
    box-shadow: ${mainShadow};
    cursor: pointer;
  }

  :active {
    background-color: ${colors.yellow100};
    color: ${colors.textBlack};
  }

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 2.8vw;
    width: auto;
    padding: 20px;
  }

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 4vw;
  }
`;

const PatternImage = styled.img`
  width: 100%;
  height: 100%;
`;
