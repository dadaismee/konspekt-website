import React from 'react';
import { graphql } from 'gatsby';
import {
  TextSection,
  Layout,
  PatternImage,
  CirriculumCard,
} from '../components/components_index';
import { colors } from '../styles/ColorStyles';

const headingMain = {
  first: {
    title: 'A video course',
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: 'to teach you',
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: 'systematic writing',
    isBold: true,
    isAnimated: true,
  },
  fourth: {
    title: 'tools',
    isBold: false,
    isAnimated: false,
  },
};

const mainText = {
  image: '/images/graphics/pattern_typography.svg',
  tagline: 'Get a system that speeds up and deepens your writing',
  text: 'Research writing is not straightforward in terms of procedure. It can be daunting and complex to grasp, especially when you need to start a new paper and face a blank screen.',
};

const headingInstructor = {
  first: {
    title: 'Meet',
    isBold: true,
    isAnimated: false,
  },
  second: {
    title: 'your',
    isBold: false,
    isAnimated: false,
  },
  third: {
    title: 'instructor',
    isBold: true,
    isAnimated: true,
  },
  fourth: {
    title: '',
    isBold: false,
    isAnimated: false,
  },
};

const mainTextInstructor = {
  image: '/images/graphics/pattern_typography.svg',
  tagline: `Instructional designer\nLecturer\n PhD student\n`,
  text: 'Hi! I am Valerii Shevchenko, a PhD student at HSE University, a sociology teacher at MSSES and content producer at Practicum. I work with texts a lot, so I once decided to optimize the process.',
};

const course = ({ data }) => {
  return (
    <Layout>
      <TextSection
        headingText={headingMain}
        mainText={data.contentfulMainText}
        color={colors.yellow100}
      />
      <PatternImage />
      {/* <CirriculumCard />
      <CirriculumCard /> */}
      <TextSection
        headingText={headingInstructor}
        mainText={mainTextInstructor}
        color={colors.green100}
      />
      {/* <Button /> */}
    </Layout>
  );
};

export default course;
export const Head = () => <title>Writing Tools Course</title>;

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
