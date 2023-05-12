import React from 'react';
import styled from 'styled-components';
import { heading1, heading4 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';
import {
  cssForRombAnimation,
  mainShadow,
  mediaQueries,
} from '../styles/GlobalStyles';
import {
  opacityAnimation,
  RombOpacityAnimation,
  RombCSS,
  PulseRomb,
} from './Animations';
import { PatternImage } from './components_index';

const Hero = ({ taglineText, handleClick }) => {
  return (
    <MegaWrapper>
      <Wrapper>
        <TaglineWrapper>
          <Tagline>
            {taglineText.firstLine}
            <br /> <span>{taglineText.secondLine}</span>
          </Tagline>
        </TaglineWrapper>
        <TextWrapper>
          <Subtext>
            Learn <span>workflows</span> <br />
            and use <span>toolchains</span> <br />
            for better writing <br />
          </Subtext>
          <Button onClick={handleClick}>
            Sign up
            <br /> for early access
          </Button>
        </TextWrapper>
      </Wrapper>
      <PatternImage />
    </MegaWrapper>
  );
};

export default Hero;

const MegaWrapper = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 20vh 4vw; // 167px 128px // 15vh 4vw
  background-color: ${colors.green80};

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr;
    padding: 10vh 4vw; // 167px 128px // 15vh 4vw
    gap: 4vh;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 12vh;
    padding: 16vw 4vw 8vw; // 167px 128px // 15vh 4vw
    place-content: center;
    height: 100dvh;
  }
`;

const TaglineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-image: linear-gradient(
    to right,
    ${colors.yellow80} 100%,
    ${colors.yellow80} 100%
  );
  background-repeat: no-repeat;
  width: 48vw;
  height: 18vw;

  transform: skewX(160deg);
  animation: ${RombOpacityAnimation} ${PulseRomb};
  opacity: 0;
  animation-delay: 0.25s;

  @media (max-width: ${mediaQueries.tablet}) {
    width: 77.5vw;
    height: 32.5vw;
  }
`;

const Tagline = styled(heading1)`
  transform: skewX(-160deg);
  text-align: center;

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
    /* gap: 0; */
    justify-content: space-evenly;
    align-items: stretch;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 6vw;
  }
`;

const Subtext = styled(heading4)`
  width: 100%;
  opacity: 0;
  animation: ${opacityAnimation};
  animation-delay: 1.5s;
  text-align: center;

  span {
    /* ${cssForRombAnimation(colors.yellow80)};
    animation: ${RombCSS};
    animation-delay: 1.95s; */
    font-weight: 400;
    font-style: italic;
  }

  @media (max-width: ${mediaQueries.tablet}) {
    line-height: 120%;
  }
  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
    width: 75vw;
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
    width: 100%;
    padding: 20px;
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 75vw;
    font-size: 5vw;
  }
`;
