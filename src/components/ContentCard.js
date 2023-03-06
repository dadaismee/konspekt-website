import React from "react";
import styled from "styled-components";
import { colors } from "../styles/ColorStyles";
import { mediaQueries } from "../styles/GlobalStyles";
import { bodyIntro, bodyText } from "../styles/TextStyles";
import Button from "./Button";

const cardType = {
  product: {
    long: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridColumnStart: "1",
      gridColumnEnd: "3",
      width: "100%",
      height: "auto",
    },
    normal: {
      display: "flex",
      flexDirection: "column",
      width: "39.7vw", //573px
      height: "64vh", //696px
    },
  },
  whatChoose: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 40px",
    gap: "40px",
    maxWidth: "382px",
    height: "602px",
  },
};

const ContentCard = ({ color, cardData }) => {
  return (
    <Wrapper type={cardData.type} subtype={cardData.subtype} color={color}>
      <Image type={cardData.type} src={cardData.image} />
      <TextWrapper>
        <Title>{cardData.title}</Title>
        <Text>{cardData.text}</Text>
      </TextWrapper>
      <ButtonWrapper>
        {cardData.price && <Price>{cardData.price}</Price>}
        <Button
          bgColor={colors.pink100}
          txtColor={colors.textWhite}
          text="Buy"
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ContentCard;

const Wrapper = styled.div`
  ${({ type, subtype }) =>
    type === "whatChoose"
      ? cardType.whatChoose
      : subtype === "long"
      ? cardType.product.long
      : cardType.product.normal};
  gap: 3.77vh; //40px;
  padding: 2.77vw; //40px

  box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);
  background-color: ${({ color }) => color};
  border-radius: 25px;

  @media (max-width: ${mediaQueries.tablet}) {
    width: 100%;
    padding: 5.54vw;
  }
`;

const Image = styled.img`
  max-height: 260px;
  width: 100%;
  /* height: 24vh; */
  object-fit: cover;
  border-radius: ${(props) => (props.type === "whatChoose" ? "0px" : "25px")};

  /* ${Wrapper} {
    border-radius: ${(props) => (props.type === "long" ? "none" : "25px")};
  } */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(bodyIntro)`
  font-weight: 700;
`;

const Text = styled(bodyText)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled(bodyText)`
  font-weight: 700;
`;
