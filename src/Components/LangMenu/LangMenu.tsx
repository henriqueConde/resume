import React, { MouseEventHandler } from 'react'
import styled from '@emotion/styled/macro'
import { Body } from '../../Utils/Typography'
import { getAvailableLangs, getCurrentLangState } from '../../Utils/Functions/selectorFunctions'
import { ColorsEnum } from '../../Model/ColorsEnum';

interface LangMenuProps {
  onClick: MouseEventHandler<HTMLLIElement>;
  refs: (el: any) => void;
}

const Wrapper = styled.div`
  position: absolute;
  right: 30px;
  top: -16px;
  z-index: 1;
  background-color: ${ColorsEnum.blueBg};
  border-radius: 3px;
  width: 120px;
  color: white;

  p {
    padding: 10px;
    cursor: default;
    text-align: center;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  width: 100%;
  margin: 0px;
  padding: 5px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${ColorsEnum.blueBgLight};

  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
  }
`;

export const LangMenu = ({onClick, refs}: LangMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const handleDisplayMenu = () => setIsMenuOpen(true);
  const handleHideMenu = () => setIsMenuOpen(false);

  const { languages } = getCurrentLangState();

  const availableLangs = getAvailableLangs();

  return (
    <Wrapper onMouseEnter={handleDisplayMenu} onMouseLeave={handleHideMenu}>
      <Body>{languages}</Body>
      {isMenuOpen && <ul>
        {availableLangs.map(lang => {
          return (
            <StyledLi onClick={onClick} key={lang.lang} ref={refs} data-lang={lang.lang}>
              <button>{lang.flagImg}</button>
            </StyledLi>
            )
        })}
      </ul>}
      
    </Wrapper>
  )
}
