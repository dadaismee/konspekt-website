import React, { useState } from 'react';
import ReactPageScroll from 'react-page-scroll';
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
import PageScroll from 'react-page-scroll';

const Index = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <Layout>
      <Hero taglineText={pageData.taglineText} handleClick={handleClick} />
      {modalIsOpen && <SignUpModal closeModal={() => setModalIsOpen(false)} />}

      <SecondScreen>
        <CenterHeading headingText={pageData.heading} color={colors.green80} />
        <TextSection
          mainText={data.allContentfulMainText.nodes[0]}
          image='images/graphics/stack_green_card.svg'
        />
      </SecondScreen>
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
      <FourthScreen>
        <CenterHeading headingText={pageData.whatWrong} color={colors.pink80} />
        <TextSection mainText={data.allContentfulMainText.nodes[1]} image='' />
      </FourthScreen>
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

const SecondScreen = styled.div`
  margin: 6vh 0 12vh 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === 'product'
      ? 'repeat(2, 39.7vw); column-gap: 12vh'
      : 'repeat(3, 39.7vw); gap: 5vh'};
  row-gap: 5.55vh; //60px;
  padding: var(--section-padding);
  margin: 12vh 0;

  @media (max-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column;
    /* row-gap: 3vh; */
  }
`;

const FourthScreen = styled.div`
  margin-bottom: 12vh;
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
