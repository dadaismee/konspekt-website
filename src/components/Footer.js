import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/ColorStyles';
import { mediaQueries } from '../styles/GlobalStyles';
import { smallText } from '../styles/TextStyles';
import { Logo, Menu } from './components_index';

const Footer = () => {
  return (
    <Wrapper>
      {/* <Grid>
        <Logo styles='footer' />
        <Menu menuStyles='footer' buttonStyles='footer' />
      </Grid> */}
      <BottomGrid>
        <Copywrite>Konspekt © 2023</Copywrite>
        <CreatedBy>
          <Link to='https://vshevchenko.netlify.app/' target='_blank'>
            👨🏼‍🎨/👨🏼‍💻 — V. S.
          </Link>
        </CreatedBy>
      </BottomGrid>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 2.775vh; //60px 110px 30px 110px
  /* background-color: ${colors.green40}; */
  /* border-radius: 25px 25px 0 0; */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 3vw;
  place-content: start;
`;

const BottomGrid = styled.div`
  display: flex;
  /* gap: 5vw; */
  justify-content: space-between;

  @media (max-width: ${mediaQueries.tablet}) {
    gap: 0;
  }
`;

const Copywrite = styled(smallText)`
  font-weight: 700;
`;

const CreatedBy = styled(smallText)`
  font-weight: 700;
`;
