import React from "react";
import { Hero, Layout } from "../components/components_index";
import TextSection from "../components/TextSection";
import "../index.css";

const homePageHeading = {
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

const index = () => {
  return (
    <Layout>
      <Hero />
      <TextSection headingText={homePageHeading} />
    </Layout>
  );
};

export default index;
export const Head = () => <title>Konspekt</title>;
