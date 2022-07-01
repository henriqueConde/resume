import styled from '@emotion/styled/macro';
import { FooterBoxesTypesEnum } from '../../Model/FooterBoxesTypesEnum';
import { ISocial } from '../../Model/IFooterBoxes';
import { getFooterBoxes } from '../../Utils/Functions/selectorFunctions';
import { Social } from '../Social/Social';
import { TitleBox } from '../TitleBox/TitleBox';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;

export const SocialFooter = () => {
    const { title, socialLinks } = (getFooterBoxes().filter(box => box.title === FooterBoxesTypesEnum.social)[0] as ISocial);
  return (
    <Wrapper>
        <TitleBox text={title} />
        {socialLinks.map(social => {
          return <Social {...social} key={social.text} />
        })}
    </Wrapper>
  )
}