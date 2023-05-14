import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  Hero,
  Layout,
  TextSection,
  ContentCard,
  CenterHeading,
  SignUpModal,
  Button,
} from '../components/components_index';
import { colors } from '../styles/ColorStyles';
import { mediaQueries } from '../styles/GlobalStyles';
import * as pageData from '../data/indexPageData';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

const Index = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    setModalIsOpen(true);
  };

  // function handleClickOutside(e) {
  //   if (!ref.current || ref.current.contains(e.target)) {
  //     e.preventDefault();
  //     setModalIsOpen(false);
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   document.addEventListener('touchstart', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('touchstart', handleClickOutside);
  //   };
  // }, [ref]);

  return (
    <Layout>
      <Wrapper>
        <Hero taglineText={pageData.taglineText} handleClick={handleClick} />
        {modalIsOpen && (
          <SignUpModal closeModal={() => setModalIsOpen(false)} />
        )}

        <SecondScreen>
          <CenterHeading
            headingText={pageData.heading}
            color={colors.green80}
          />
          <TextSection
            mainText={data.allContentfulMainText.nodes[0]}
            image='images/graphics/stack_green_card.svg'
          />
        </SecondScreen>
        <CardGrid type='product'>
          {data.allContentfulContentCard.nodes.map((card, index) => (
            <ContentCard
              type='product'
              subtype={card.subtype}
              cardData={card}
              key={index}
              color={colors[`${card.color}`]}
              handleClick={handleClick}
              // buttonText={card.buttonText}
            />
          ))}
        </CardGrid>
        <FourthScreen>
          <CenterHeading
            headingText={pageData.whatWrong}
            color={colors.pink80}
          />
          <TextSection
            mainText={data.allContentfulMainText.nodes[1]}
            image=''
          />
        </FourthScreen>

        <div id='swiper'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <StaticImage src='../../static/images/pictures/ordinary-way.png' />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage src='../../static/images/pictures/konspekt-way.png' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div id='image'>
          <StaticImage src='../../static/images//pictures/explanation.png' />
        </div>
        <div id='cta-button'>
          <Button
            bgColor='green100'
            txtColor='textBlack'
            text='Notify me'
            handleClick={handleClick}
            allowed={true}
            width='50vw'
            height='10vh'
          />
        </div>

        {/* <CenterHeading
        headingText={pageData.chooseHeading}
        color={colors.green80}
        align="center"
      />
      <CardGrid type="whatChoose">
        {pageData.chooseCardData.map((card, index) => (
          <ContentCard
            type="whatChoose"
            color={colors[`${card.color}`]}
            cardData={card}
            key={index}
          />
        ))}
      </CardGrid> */}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  #swiper {
    display: none;

    @media screen and (max-width: ${mediaQueries.phone}) {
      display: block;
    }
  }

  #cta-button {
    margin: var(--section-padding);
    text-align: center;
  }

  #image {
    @media screen and (max-width: ${mediaQueries.phone}) {
      display: none;
    }
  }
`;

const SecondScreen = styled.div`
  /* margin: 6vh 0 12vh 0; */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === 'product'
      ? 'repeat(2, 39.7vw); column-gap: 12vh'
      : 'repeat(3, 39.7vw); gap: 5vh'};
  row-gap: 5.55vh; //60px;
  padding: var(--section-padding);
  /* margin: 12vh 0; */

  @media (max-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
  }
`;

const FourthScreen = styled.div`
  margin-bottom: 6vh;
`;

export default Index;
export const Head = () => <title>Konspekt</title>;

// (filter: { title: { eq: "What we do" } })
export const query = graphql`
  query indexPageQuery {
    allContentfulMainText {
      nodes {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulContentCard {
      nodes {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        buttonText
        buttonColor
        color
        subtype
        image {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            formats: AUTO
            resizingBehavior: SCALE
          )
        }
      }
    }
  }
`;
