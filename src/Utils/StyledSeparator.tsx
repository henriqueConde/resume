import styled from '@emotion/styled/macro'
import { MainSeparator, SubSeparator } from './Separators';

const WrapperSeparator = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const StyledSeparator = () => {
  return (
    <WrapperSeparator>
        <SubSeparator />
        <MainSeparator />
    </WrapperSeparator>
  )
}