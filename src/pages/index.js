import React from "react";
import styled from "styled-components";
import "../index.css";
import {
  Hero,
  Layout,
  TextSection,
  ContentCard,
  CenterHeading,
  CirriculumCard,
} from "../components/components_index";
import { colors } from "../styles/ColorStyles";
import { mediaQueries } from "../styles/GlobalStyles";

const heading = {
  first: {
    title: "Konspekt",
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: "is a project about",
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: "sustainable",
    isBold: true,
    isAnimated: true,
  },
  fourth: {
    title: "research writing",
    isBold: false,
    isAnimated: false,
  },
};

const mainText = {
  image: "/images/graphics/pattern_typography.svg",
  tagline: "With courses, meetups and learning resources",
  text: "Research writing is not straightforward in terms of procedure. It can be daunting and complex to grasp, especially when you need to start a new paper and face a blank screen.",
};

const taglineText = {
  firstLine: "Streamline your",
  secondLine: "research writing",
};

const cardData = [
  {
    type: "product",
    subtype: "normal",
    color: "green60",
    image: "/images/pictures/zoom pic.jpeg",
    title: "Konspekt video course",
    text: "The workshop is a 2-day Zoom study session with a teacher, where you will learn and practice:",
  },
  {
    type: "product",
    subtype: "normal",
    color: "pink60",
    image: "/images/pictures/obsidian.png",
    title: "Obsidian Pack",
    text: "Obsidian Pack is a prepared and fully set up vault with bare essentials for a Konspekt method:",
  },
  {
    type: "product",
    subtype: "long",
    color: "yellow80",
    image: "/images/graphics/pattern_bar__card.svg",
    title: "Blog & Newsletter",
    text: "Learn the latest techniqies and best practices of academic and research writing in a simple non-techy language and with step-by-step instructions to follow. Sign up for the newsletter or read here.",
  },
];

const chooseCardData = [
  {
    type: "whatChoose",
    color: "green60",
    image: "/images/graphics/stack_pink_card.svg",
    title: "Choose course",
    text: "If you want to get the system with the help of a tutor and community",
  },
  {
    type: "whatChoose",
    color: "pink60",
    image: "/images/graphics/stack_yellow_card.svg",
    title: "Choose Obsidian Pack",
    text: "If you want to get the resources of the system and set it up on your own ",
  },
  {
    type: "whatChoose",
    color: "yellow80",
    image: "/images/graphics/stack_green_card.svg",
    title: "Blog & Newsletter",
    text: "If you want to learn about best practices and lifehacks in research and academic writing",
  },
];

const paperAsSource = {
  first: {
    title: "Your papers",
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: "are",
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: "source code",
    isBold: true,
    isAnimated: true,
  },
  fourth: {
    title: "too",
    isBold: false,
    isAnimated: false,
  },
};

const chooseHeading = {
  first: {
    title: "What",
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: "should",
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: "you",
    isBold: false,
    isAnimated: false,
  },
  fourth: {
    title: "choose",
    isBold: true,
    isAnimated: true,
  },
};

const index = () => {
  return (
    <Layout>
      <Hero taglineText={taglineText} />
      <TextSection
        headingText={heading}
        mainText={mainText}
        color={colors.yellow100}
      />
      <CenterHeading headingText={paperAsSource} color={colors.pink80} />
      <CirriculumCard />
      <CardGrid type="product">
        {cardData.map((card, index) => (
          <ContentCard
            type="product"
            subtype={card.subtype}
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
          />
        ))}
      </CardGrid>
      <CenterHeading headingText={chooseHeading} color={colors.green80} />
      <CardGrid type="whatChoose">
        {chooseCardData.map((card, index) => (
          <ContentCard
            type="whatChoose"
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
          />
        ))}
      </CardGrid>
    </Layout>
  );
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === "product" ? "repeat(2, auto)" : "repeat(3, auto); gap: 5vh"};
  row-gap: 5.55vh; //60px;
  justify-content: space-between;
  padding: var(--section-padding);

  @media (max-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
  }
`;

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default index;
export const Head = () => <title>Konspekt</title>;
