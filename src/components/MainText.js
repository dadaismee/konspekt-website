import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { bodyIntro, heading3 } from '../styles/TextStyles';

const MainText = ({ image, tagline, text }) => {
  return (
    <Wrapper image={image} tagline={tagline}>
      {image && <Image src={image} />}
      {tagline && <Tagline></Tagline>}
      <Text tagline={tagline} dangerouslySetInnerHTML={{ __html: text }} />
    </Wrapper>
  );
};

export default MainText;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ image, tagline }) =>
    Boolean(image) && Boolean(tagline)
      ? 'repeat(3, 1fr)'
      : Boolean(image)
      ? 'repeat(2, 39.7vw)'
      : '60vw'};
  justify-content: center;
  gap: 12vh;

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.46vw;
  }
`;

const Image = styled.img`
  width: 100%;

  @media (max-width: ${mediaQueries.tablet}) {
    width: 42vw;
  }
`;

const Tagline = styled(heading3)``;

const Text = styled(bodyIntro)`
  ${({ tagline }) =>
    Boolean(tagline) ? 'max-width: 578.72px; width: 50vw;' : 'max-width: auto'}
  font-weight: 500;
  font-size: 1.38vw; //20px;
  line-height: 150%;

  p {
    margin-top: 0.69vw;
  }

  h4 {
    font-size: 2vw; // 32px
    line-height: 120%;
    font-weight: 700;
    margin: 32px 0 16px 0;
  }

  ul {
    list-style-type: disc;
    margin: 0.69vw 1.5vw 0vh 1.5vw;
  }
  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
