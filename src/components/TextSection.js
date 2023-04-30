import React from 'react';
import styled from 'styled-components';
import { MainText } from './components_index';

const TextSection = ({ mainText, image }) => {
  console.log(mainText);

  return (
    <Wrapper>
      <MainText
        image={image}
        tagline={mainText.title}
        text={mainText.text.childMarkdownRemark.html}
      />
    </Wrapper>
  );
};

export default TextSection;

const Wrapper = styled.div`
  display: grid;
  gap: 4vh;
  padding: var(--section-padding); //4.1vw 7.7vw; //
`;
