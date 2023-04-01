import React, { useState } from "react";
import styled from "styled-components";
import {
  Hero,
  Layout,
  TextSection,
  ContentCard,
  CenterHeading,
  SignUpModal,
} from "../components/components_index";
import { colors } from "../styles/ColorStyles";
import { mediaQueries } from "../styles/GlobalStyles";
import * as pageData from "../data/indexPageData";
import { graphql } from "gatsby";

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
        mainText={data.contentfulMainText}
        image="/images/graphics/pattern_typography.svg"
      />
      <ExplainImage src="/images//pictures/explanation.png" alt="explanation" />
      <CenterHeading
        headingText={pageData.paperAsSource}
        color={colors.pink80}
      />
      <CardGrid type="product">
        {pageData.cardData.map((card, index) => (
          <ContentCard
            type="product"
            subtype={card.subtype}
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
            buttonText={card.buttonText}
          />
        ))}
      </CardGrid>
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
    type === "product"
      ? "repeat(2, auto); column-gap: 12vh"
      : "repeat(3, auto); gap: 5vh"};
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

export const query = graphql`
  query MyQuery {
    contentfulMainText {
      title
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
