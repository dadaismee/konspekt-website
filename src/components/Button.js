import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/ColorStyles';
import { mediaQueries, mainShadow } from '../styles/GlobalStyles';

// const type = {
//   hero: {
//     padding: "1.3vw",
//     opacity: "0",
//     animation: `${opacityAnimation}`,
//     animationDelay: "2s",
//   },
//   normal: {
//     opacity: "1",
//   },
// };

const Button = ({
  bgColor,
  txtColor,
  text,
  type,
  handleClick,
  allowed,
  width,
  height,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      txtColor={txtColor}
      type={type}
      onClick={handleClick}
      allowed={allowed}
      width={width}
      height={height}
    >
      {text}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  background-color: ${({ bgColor }) => colors[`${bgColor}`]};
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  color: ${({ txtColor }) => colors[`${txtColor}`]};
  font-weight: 700;
  font-size: 1.6vw; //24px // 1.6vw
  transition: all 0.25s;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* ${({ type }) => (type === 'hero' ? type.hero : type.normal)}; */

  :hover {
    /* color: ${colors.textBlack}; */
    transform: translateY(-2.5px);
    box-shadow: ${mainShadow};
    cursor: ${({ allowed }) => (allowed ? 'pointer' : 'not-allowed')};
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
    font-size: 5vw;
  }
`;
