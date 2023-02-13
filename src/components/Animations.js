import styled, { css, keyframes } from "styled-components";
import { colors } from "../styles/ColorStyles";

export const RombHover = styled.div`
  padding: 0 0.25vw;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transform: skewX(-20deg);

  :hover {
    background-image: linear-gradient(
      to right,
      ${colors.yellow100} 100%,
      ${colors.yellow40} 100%
    );
    background-size: 100% 100%;
  }
`;

const Romb = keyframes`
  0% {
    background-size: 0 100%;
    transform: translateY(10px) skewX(-20deg);
  }
  
  50% {
    background-size: 0 100%;
    transform: translateY(0px) skewX(-20deg);
  }
  75% {
    box-shadow: 0 0 0 rgba(0,0,0,0);
    background-size: 100% 100%;
  }
  100% {
    opacity: 1;
    box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }`;

export const RombAnimation = (props) => css`
  ${Romb} 1.5s forwards;
`;

export const opacityAnimation = css`
  ${opacity} 1s forwards
`;
