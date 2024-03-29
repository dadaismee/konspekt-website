import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../data/menuItems';
import { mediaQueries } from '../styles/GlobalStyles';
import { MenuButton, MenuTooltip } from './components_index';

const MenuWrapStyle = {
  normal: {
    display: 'grid',
    gridTemplateColumns: `repeat(${menuItems.length}, auto)`,
    placeItems: 'end',
    gap: '3vw',
  },
  footer: {
    display: 'grid',
    gridTemplateRows: `repeat(5, auto)`,
    placeItems: 'start',
  },
};

const Menu = ({ menuStyles, buttonStyles, isOpen, handleClick, ref }) => {
  return (
    <MenuWrapper isOpen={isOpen} menuStyles={menuStyles}>
      {menuItems.map((item, index) => (
        <MenuButton
          title={item.title}
          link={item.link}
          buttonStyles={buttonStyles}
          soon={item.soon}
          key={index}
        />
      ))}
      {/* <TooltipWrapper>
        <MenuTooltip isOpen={isOpen} handleClick={handleClick} ref={ref} />
      </TooltipWrapper> */}
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'grid')};
  gap: '3vw';
  ${({ menuStyles }) =>
    menuStyles === 'footer' ? MenuWrapStyle.footer : MenuWrapStyle.normal};

  @media (max-width: ${mediaQueries.tablet}) {
    > a {
      display: ${(props) => (props.menuStyles === 'footer' ? 'block' : 'none')};
    }
  }

  @media (max-width: ${mediaQueries.phone}) {
    gap: 0px;
  }
`;

const TooltipWrapper = styled.div`
  display: none;

  @media (max-width: ${mediaQueries.tablet}) {
    display: block;
  }
`;
