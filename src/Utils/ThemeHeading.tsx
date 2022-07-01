import styled from '@emotion/styled/macro'
import { StyledSeparator } from '../Components/StyledSeparator/StyledSeparator';

interface SecondaryTitle {
    text: String;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

const Title = styled.h3`
    color: black;
    font-family: sans-serif;
    font-size: 1.3rem;
    margin: 0;
    position: relative;
`;

export const ThemeHeading = ({ text }: SecondaryTitle) => {
  return (
      <Wrapper>
        <Title>{text.toLocaleUpperCase()}</Title>
        <StyledSeparator />
      </Wrapper>
  )
}
