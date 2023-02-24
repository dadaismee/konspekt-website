import React from "react";
import "../index.css";
import { Hero, Layout, TextSection } from "../components/components_index";
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

const index = () => {
  return (
    <Layout>
      <Hero />
      <TextSection
        headingText={heading}
        mainText={mainText}
        color={colors.yellow100}
      />
    </Layout>
  );
};

export default index;
export const Head = () => <title>Konspekt</title>;

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
