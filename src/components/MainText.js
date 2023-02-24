import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyles";
import { bodyIntro, heading3 } from "../styles/TextStyles";

const MainText = ({ image, tagline, text }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Tagline>{tagline}</Tagline>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default MainText;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.73vw; //25px

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.46vw;
  }
`;

const Image = styled.img`
  max-width: 305px;
  width: 21vw;

  @media (max-width: ${mediaQueries.tablet}) {
    width: 42vw;
  }
`;

const Tagline = styled(heading3)`
  width: 0.2vw; // 288px

  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
  }
`;

const Text = styled(bodyIntro)`
  max-width: 578.72px;
  width: 40vw;

  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
  }
`;
