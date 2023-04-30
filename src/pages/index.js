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
  Button,
} from '../components/components_index';
import { colors } from '../styles/ColorStyles';
import { mediaQueries } from '../styles/GlobalStyles';
import * as pageData from '../data/indexPageData';

const Index = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout>
      <Hero
        taglineText={pageData.taglineText}
        handleClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && <SignUpModal closeModal={() => setModalIsOpen(false)} />}
      <CenterHeading headingText={pageData.heading} color={colors.yellow80} />
      <TextSection
        mainText={data.allContentfulMainText.nodes[0]}
        image='images/graphics/pattern_typography.svg'
      />
      <CardGrid type='product'>
        {data.allContentfulContentCard.nodes.map((card, index) => (
          <ContentCard
            type='product'
            subtype={card.subtype}
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
            buttonText={card.buttonText}
          />
        ))}
      </CardGrid>
      <CenterHeading headingText={pageData.whatWrong} color={colors.pink80} />
      <TextSection mainText={data.allContentfulMainText.nodes[1]} image='' />
      <ExplainImage src='/images//pictures/explanation.png' alt='explanation' />
      {/* Add a screen-wide sig-up button */}
      {/* <Button
        bgColor={colors.green}
        txtColor={colors.textBlack}
        handleClick={() => setModalIsOpen(true)}
        type='normal'
        text='Sign Up'
      /> */}
      ***
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === 'product'
      ? 'repeat(2, auto); column-gap: 12vh'
      : 'repeat(3, auto); gap: 5vh'};
  row-gap: 5.55vh; //60px;
  padding: var(--section-padding);
  justify-content: space-around;

  @media (max-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
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
        color
        subtype
      }
    }
  }
`;
