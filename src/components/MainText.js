import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { bodyIntro, heading3 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';

const MainText = ({ image, tagline, text }) => {
  return (
    <Wrapper image={image} tagline={tagline}>
      {image && <Image src={image} />}
      {/* {tagline && <Tagline></Tagline>} */}
      <Text tagline={tagline} dangerouslySetInnerHTML={{ __html: text }} />
    </Wrapper>
  );
};

export default MainText;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ image }) =>
    Boolean(image) ? 'repeat(2, 39.7vw)' : '60vw'};
  justify-content: center;
  gap: 12vh;

  @media (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: repeat(2, auto);
    gap: 4vw;
  }
`;

const Image = styled.img`
  display: grid;
  place-self: center;
  width: 75%;

  @media (max-width: ${mediaQueries.tablet}) {
    width: 42vw;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: block;
    width: auto;
  }
`;

const Tagline = styled(heading3)``;

const Text = styled(bodyIntro)`
  ${({ tagline }) =>
    Boolean(tagline) ? 'max-width: 578.72px; width: 50vw;' : 'max-width: auto'}

  p {
    font-weight: 500;
    font-size: 1.6vw; //23.4615px;
    line-height: 145%;
    color: ${colors.textBlack};

    @media (max-width: ${mediaQueries.tablet}) {
      font-size: 20px;
    }

    @media (max-width: ${mediaQueries.phone}) {
      font-size: 18px;
    }
  }

  strong {
    font-weight: 700;
  }

  h4 {
    font-size: 2vw; // 32px
    line-height: 120%;
    font-weight: 700;
    margin: 32px 0 0 0;

    @media (max-width: ${mediaQueries.tablet}) {
      font-size: 24px;
      line-height: 145%;
    }
  }

  ul {
    list-style-type: disc;
    margin: 0.69vw 1.5vw;

    @media screen and (max-width: ${mediaQueries.tablet}) {
      margin: 0.69vw 4vw;
    }

    @media screen and (max-width: ${mediaQueries.phone}) {
      margin-bottom: 4vw;
    }
  }
  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
