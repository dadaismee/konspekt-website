import styled from "styled-components";
import { colors } from "./ColorStyles";

export const heading1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 60px; //4vw
  line-height: 120%;
  color: ${colors.textBlack};

  @media (max-width: 750px) {
    font-size: 8vw;
    /* line-height: 100%; */
  }
`;

export const heading2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48.8782px;
  line-height: 60px;
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
  font-size: 32px; // 2vw
  line-height: 120%;
  color: ${colors.textBlack};

  @media (max-width: 750px) {
    font-size: 20px;
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
  font-size: 20px;
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
  font-size: 16px;
  line-height: 19px;
  color: ${colors.textBlack};
`;
