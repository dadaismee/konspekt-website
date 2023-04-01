import React from "react";
import "../index.css";
import {
  CirriculumCard,
  Hero,
  Layout,
  PatternImage,
  TextSection,
} from "../components/components_index";
import { colors } from "../styles/ColorStyles";

const heading = {
  first: {
    title: "Obsidian Pack",
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: "is a ZIP archive",
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: "with a",
    isBold: false,
    isAnimated: false,
  },
  fourth: {
    title: "set up system",
    isBold: true,
    isAnimated: true,
  },
};

const mainText = {
  image: "/images/graphics/pattern_typography.svg",
  tagline: "Folders, templates and workflows ready for work",
  text: "Research writing is not straightforward in terms of procedure. It can be daunting and complex to grasp, especially when you need to start a new paper and face a blank screen.",
};

const pack = () => {
  return (
    <Layout>
      <TextSection
        headingText={heading}
        mainText={mainText}
        color={colors.pink60}
      />
      <PatternImage />
      <CirriculumCard />
      {/* <Button />  Buy button*/}
    </Layout>
  );
};

export default pack;
export const Head = () => <title>Konspekt Toolchain</title>;
