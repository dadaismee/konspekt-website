import React from "react";
import styled from "styled-components";
import { bodyIntro, bodyText } from "../styles/TextStyles";

const cardType = {
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
    width: "573px",
    height: "696px",
  },
};

const ContentCard = ({ color, cardData }) => {
  return (
    <Wrapper type={cardData.type} color={color}>
      <Image src={cardData.image} />
      <TextWrapper>
        <Title>{cardData.title}</Title>
        <Text>{cardData.text}</Text>
      </TextWrapper>
      {/* <Button /> */}
    </Wrapper>
  );
};

export default ContentCard;

const Wrapper = styled.div`
  gap: 40px;
  padding: 40px;
  ${(props) => (props.type === "long" ? cardType.long : cardType.normal)};

  box-shadow: 5px 20px 40px rgba(0, 0, 0, 0.25);
  background-color: ${({ color }) => color};
  border-radius: 25px;
`;

const Image = styled.img`
  max-height: 260px;
  width: 100%;
  /* height: 24vh; */
  object-fit: cover;
  border-radius: 25px;

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
