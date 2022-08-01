import styled from '@emotion/styled/macro'
import { TitleBox } from '../TitleBox/TitleBox'
import { MainHeading } from '../../Utils/Typography';
import { IPersonalInfo } from '../../Model/IPersonalInfo';

const Wrapper = styled.div`
  border: 2px solid;
  width: 100vw;
  max-width: 30rem;
  padding: 20px 10px;
  margin: 36px auto;
  margin-bottom: 70px;
  position: relative;
`;

export const TitleHero = ({firstName, lastName, profession}: IPersonalInfo) => {
  return (
    <Wrapper>
        <MainHeading>{firstName} {lastName}</MainHeading>
        <TitleBox text={profession} />
    </Wrapper>
  )
}
