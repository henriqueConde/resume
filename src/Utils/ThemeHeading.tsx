import styled from '@emotion/styled/macro'
import { StyledSeparator } from './StyledSeparator';

interface SecondaryTitle {
  title: String;
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

export const ThemeHeading = ({ title }: SecondaryTitle) => {
  return (
      <Wrapper>
        <Title>{title.toLocaleUpperCase()}</Title>
        <StyledSeparator />
      </Wrapper>
  )
}
