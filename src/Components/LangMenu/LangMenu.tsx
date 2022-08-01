import styled from '@emotion/styled/macro'
import { ColorsEnum } from '../../Model/ColorsEnum';
import { IAvailableLanguage } from '../../Model/IAvailableLanguage';

interface LangMenuProps {
  onChange: any;
  availableLangs: IAvailableLanguage[];
}

const Wrapper = styled.select`
  position: absolute;
  right: 30px;
  top: -16px;
  z-index: 1;
  background-color: ${ColorsEnum.blueBg};
  border-radius: 3px;
  width: 120px;
  color: white;
  padding: 10px;
  text-align-last: center;
  appearance: none;
  cursor: pointer;
`;

const StyledOption = styled.option`
  list-style: none;
  width: 100%;
  margin: 0px;
  padding: 5px 0px;

  &:hover {
    background-color: ${ColorsEnum.blueBgLight};
  }
`;

export const LangMenu = ({onChange, availableLangs}: LangMenuProps) => {
 
  return (
    <Wrapper onChange={onChange}>
        {availableLangs.map(lang => {
            return (
              <StyledOption value={lang.lang}>{lang.flagImg}</StyledOption>
              )
          })}
    </Wrapper>
  )
}
