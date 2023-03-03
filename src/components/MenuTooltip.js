import React, { useState } from "react";
import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import { colors } from "../styles/ColorStyles";
import { mainShadow } from "../styles/GlobalStyles";
import MenuButton from "./MenuButton";

const MenuTooltip = ({ buttonStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {menuItems.map((item, index) => (
        <MenuButton
          // buttonStyles={buttonStyles}
          title={item.title}
          link={item.link}
          key={index}
        />
      ))}
    </Wrapper>
  );
};

export default MenuTooltip;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px;

  background-color: ${({ isOpen }) =>
    isOpen ? colors.green100 : colors.green40};
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: ${mainShadow};
  z-index: 1;
`;
