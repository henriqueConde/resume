import styled from '@emotion/styled/macro';
import React from 'react'
import { FooterBoxesTypesEnum } from '../../Model/FooterBoxesTypesEnum';
import { IContact } from '../../Model/IFooterBoxes';
import { getFooterBoxes } from '../../Utils/Functions/selectorFunctions';
import { Body } from '../../Utils/Typography';
import { TitleBox } from '../TitleBox/TitleBox';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;


export const Contact = () => {
    const contact = (getFooterBoxes().filter(box => box.title === FooterBoxesTypesEnum.contact)[0] as IContact);
  return (
    <Wrapper>
        <TitleBox text={contact.title}></TitleBox>
        <Body>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </Body>
        <Body>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </Body>
    </Wrapper>
  )
}
