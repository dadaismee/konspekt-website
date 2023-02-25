import React from "react";
import styled from "styled-components";
import "../index.css";
import {
  Hero,
  Layout,
  TextSection,
  ContentCard,
} from "../components/components_index";
import { colors } from "../styles/ColorStyles";

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

// const taglineString = mainText.tagline.split(" ");
// const selected = taglineString[taglineString.length - 2];
// console.log(selected);

const taglineText = {
  firstLine: "Streamline your",
  secondLine: "research writing",
};

const cardData = [
  {
    type: "normal",
    color: "green60",
    image: "/images/pictures/zoom pic.jpeg",
    title: "Konspekt video course",
    text: "The workshop is a 2-day Zoom study session with a teacher, where you will learn and practice:",
  },
  {
    type: "normal",
    color: "pink60",
    image: "/images/pictures/obsidian.png",
    title: "Obsidian Pack",
    text: "Obsidian Pack is a prepared and fully set up vault with bare essentials for a Konspekt method:",
  },
  {
    type: "long",
    color: "yellow80",
    image: "/images/graphics/pattern_bar__card.svg",
    title: "Blog & Newsletter",
    text: "Learn the latest techniqies and best practices of academic and research writing in a simple non-techy language and with step-by-step instructions to follow. Sign up for the newsletter or read here.",
  },
];

const index = () => {
  return (
    <Layout>
      <Hero taglineText={taglineText} />
      <TextSection
        headingText={heading}
        mainText={mainText}
        color={colors.yellow100}
      />
      <CardGrid>
        {cardData.map((card, index) => (
          <ContentCard
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
          />
        ))}
      </CardGrid>
    </Layout>
  );
};

export default index;
export const Head = () => <title>Konspekt</title>;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 60px;
  justify-content: space-between;
  padding: var(--section-padding);
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
