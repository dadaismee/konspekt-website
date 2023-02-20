import styled from "styled-components";
import { colors } from "./ColorStyles";
import { mediaQueries } from "./GlobalStyles";

export const heading1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 5vw; //4vw
  line-height: 120%;
  color: ${colors.textBlack};

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 8vw;
  }
`;

export const heading2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48.87px;
  /* line-height: 60px; */
  color: ${colors.textBlack};
`;

export const heading3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 39.1026px;
  line-height: 48px;
  color: ${colors.textBlack};
`;

export const heading4 = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 2vw; // 32px
  line-height: 120%;
  color: ${colors.textBlack};

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 4vw;
    line-height: 145%;
  }
`;

export const bodyIntro = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 23.4615px;
  line-height: 130%;
  color: ${colors.textBlack};
`;

export const bodyText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.38vw; //20px;
  line-height: 145%;
  color: ${colors.textBlack};
`;

export const cardHeading = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.textBlack};
`;

export const smallText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw; //16px;
  /* line-height: 19px; */
  color: ${colors.textBlack};

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 13px;
  }
`;
