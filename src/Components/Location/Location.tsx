import styled from '@emotion/styled/macro';
import React from 'react'
import { FooterBoxesTypesEnum } from '../../Model/FooterBoxesTypesEnum';
import { ILocation } from '../../Model/IFooterBoxes';
import { getFooterBoxes } from '../../Utils/Functions/selectorFunctions';
import { Body } from '../../Utils/Typography';
import { TitleBox } from '../TitleBox/TitleBox';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;

export const Location = () => {
    const location = (getFooterBoxes().filter(box => box.title === FooterBoxesTypesEnum.location)[0] as ILocation);
  return (
    <Wrapper>
        <TitleBox text={location.title}></TitleBox>
        <Body>{location.location}</Body>
    </Wrapper>
  )
}
