import React from "react";
import styled from "styled-components";
import CenterHeading from "./CenterHeading";

const TextSection = ({ headingText }) => {
  return (
    <Wrapper>
      <CenterHeading headingText={headingText} />
      <MainText />
      <ActionList />
    </Wrapper>
  );
};

export default TextSection;

const Wrapper = styled.div`
  position: relative;
  padding: var(--section-padding);
`;

const MainText = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

const ActionList = styled.ol``;
