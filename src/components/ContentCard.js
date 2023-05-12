import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../styles/ColorStyles';
import { mediaQueries } from '../styles/GlobalStyles';
import { bodyIntro, bodyText } from '../styles/TextStyles';
import Button from './Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const cardType = {
  product: {
    long: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridColumnStart: '1',
      gridColumnEnd: '3',
      width: '100%',
      height: 'auto',
    },
    normal: {
      display: 'flex',
      flexDirection: 'column',
      width: '39.7vw', //573px
      height: '696px', //696px
    },
  },
  whatChoose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 40px',
    gap: '40px',
    // maxWidth: '382px',
    height: '602px',
  },
};

const ContentCard = ({ color, cardData, handleClick }) => {
  const img = getImage(cardData.image);
  return (
    <Wrapper type={cardData.type} subtype={cardData.subtype} color={color}>
      <GatsbyImage image={img} alt={cardData.title} style={Image} />
      <TextWrapper>
        <Title>{cardData.title}</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: cardData.text.childMarkdownRemark.html,
          }}
        />
      </TextWrapper>
      <ButtonWrapper>
        {cardData.price && <Price>{cardData.price}</Price>}
        {/* <Link to={cardData.link}> */}
        <Button
          bgColor={cardData.buttonColor}
          txtColor={cardData.buttonTextColor}
          text={cardData.buttonText}
          handleClick={handleClick}
          allowed={true}
        />
        {/* </Link> */}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ContentCard;

const Wrapper = styled.div`
  ${({ type, subtype }) =>
    type === 'whatChoose'
      ? cardType.whatChoose
      : subtype === 'long'
      ? cardType.product.long
      : cardType.product.normal};
  width: 100%;
  gap: 3.77vh; //40px;
  padding: 2.77vw; //40px
  margin-bottom: auto;

  box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);
  background-color: ${({ color }) => color};
  border-radius: 25px;

  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
    height: auto;
    padding: 5.54vw;
  }
`;

// Commented due to use of GatsbyImage that cannot be wrapped into Styled Component
// const Image = styled.div`
//   max-height: 260px;
//   width: 100%;
//   /* height: 24vh; */
//   object-fit: cover;
//   border-radius: ${(props) => (props.type === 'whatChoose' ? '0px' : '25px')};

//   /* ${Wrapper} {
//     border-radius: ${(props) => (props.type === 'long' ? 'none' : '25px')};
//   } */
// `;

const Image = {
  // maxHeight: '260px',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '25px',
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(bodyIntro)`
  font-weight: 700;
  font-size: 24px; // 32px
  line-height: 120%;
  font-weight: 700;
  margin-bottom: -16px;

  @media screen and (max-width: ${mediaQueries.phone}) {
    font-size: 20px;
  }
`;

const Text = styled(bodyText)`
  font-weight: 500;
  font-size: 1.38vw; //20px;
  line-height: 150%;
  margin-bottom: auto;

  * {
    font-size: 1.38vw; //20px;
    line-height: 145%;

    @media (max-width: ${mediaQueries.tablet}) {
      font-size: 20px;
    }
    @media (max-width: ${mediaQueries.phone}) {
      font-size: 16px;
      line-height: 130%;
    }
  }

  p {
    margin-top: 0.69vw;
    font-weight: 500;
    font-size: 1.6vw; //23.4615px;
    line-height: 145%;
    color: ${colors.textBlack};

    @media (max-width: ${mediaQueries.tablet}) {
      font-size: 20px;
    }

    @media (max-width: ${mediaQueries.phone}) {
      font-size: 16px;
      margin-bottom: 4vw;
    }
  }

  ul {
    list-style-type: disc;
    margin: 0.69vw 1.5vw 0vh 1.5vw;

    @media screen and (max-width: ${mediaQueries.tablet}) {
      margin: 0.69vw 4vw;
    }
  }

  ol {
    list-style-type: number;
    margin: 0.69vw 1.5vw 0vh 1.5vw;

    @media screen and (max-width: ${mediaQueries.tablet}) {
      margin: 0.69vw 6vw;
    }
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: ${mediaQueries.tablet}) {
    width: auto;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  place-items: end end;
  margin-top: auto;
`;

const Price = styled(bodyText)`
  font-weight: 700;
`;
