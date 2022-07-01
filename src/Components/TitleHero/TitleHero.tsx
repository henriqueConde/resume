import styled from '@emotion/styled/macro'
import { TitleBox } from '../TitleBox/TitleBox'
import { getStatePersonalInfo } from '../../Utils/Functions/selectorFunctions'
import { MainHeading } from '../../Utils/Typography';

const Wrapper = styled.div`
    border: 2px solid;
    width: 100vw;
    max-width: 30rem;
    padding: 20px 10px;
    margin: 36px auto;
    margin-bottom: 70px;
    position: relative;
`;

export const TitleHero = () => {
  const { firstName, lastName, profession } = getStatePersonalInfo();
  return (
    <Wrapper>
        <MainHeading>{firstName} {lastName}</MainHeading>
        <TitleBox text={profession} />
    </Wrapper>
  )
}
