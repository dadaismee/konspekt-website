import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  Hero,
  Layout,
  TextSection,
  ContentCard,
  CenterHeading,
  SignUpModal,
} from '../components/components_index';
import { colors } from '../styles/ColorStyles';
import { mediaQueries } from '../styles/GlobalStyles';
import * as pageData from '../data/indexPageData';
import { StaticImage } from 'gatsby-plugin-image';

const Index = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <Layout>
      <FirstScreen>
        <Hero taglineText={pageData.taglineText} handleClick={handleClick} />
        {modalIsOpen && (
          <SignUpModal closeModal={() => setModalIsOpen(false)} />
        )}
      </FirstScreen>
      <CenterHeading headingText={pageData.heading} color={colors.green80} />
      <TextSection
        mainText={data.allContentfulMainText.nodes[0]}
        image='images/graphics/stack_green_card.svg'
      />
      <CardGrid type='product'>
        {data.allContentfulContentCard.nodes.map((card, index) => (
          <ContentCard
            type='product'
            subtype={card.subtype}
            cardData={card}
            key={index}
            color={colors[`${card.color}`]}
            handleClick={handleClick}
            // buttonText={card.buttonText}
          />
        ))}
      </CardGrid>
      <CenterHeading headingText={pageData.whatWrong} color={colors.pink80} />
      <TextSection mainText={data.allContentfulMainText.nodes[1]} image='' />
      <StaticImage src='../../static/images//pictures/explanation.png' />

      {/* <CenterHeading
        headingText={pageData.chooseHeading}
        color={colors.green80}
        align="center"
      />
      <CardGrid type="whatChoose">
        {pageData.chooseCardData.map((card, index) => (
          <ContentCard
            type="whatChoose"
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
          />
        ))}
      </CardGrid> */}
    </Layout>
  );
};

const FirstScreen = styled.div`
  height: 100dvh;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === 'product'
      ? 'repeat(2, 39.7vw); column-gap: 12vh'
      : 'repeat(3, 39.7vw); gap: 5vh'};
  /* row-gap: 5.55vh; //60px; */
  padding: var(--section-padding);

  @media (max-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column;
    /* row-gap: 3vh; */
  }
`;

const ExplainImage = styled.img`
  width: 100%;
  /* padding: var(--section-padding); */
`;

export default Index;
export const Head = () => <title>Konspekt</title>;

// (filter: { title: { eq: "What we do" } })
export const query = graphql`
  query indexPageQuery {
    allContentfulMainText {
      nodes {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulContentCard {
      nodes {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        buttonText
        buttonColor
        color
        subtype
        image {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            formats: AUTO
            resizingBehavior: SCALE
          )
        }
      }
    }
  }
`;
