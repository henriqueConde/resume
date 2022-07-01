import styled from '@emotion/styled/macro'

interface TitleBoxProps {
    text: String
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Box = styled.h3`
    background-color: black;
    color: white;
    width: 100%;
    max-width: 13rem;
    margin: 0;
    text-align: center;
    padding: 2px 20px;
`;

export const TitleBox = ({ text }: TitleBoxProps) => {
  const upperText = text.toUpperCase();
  return (
      <Wrapper>
          <Box>{upperText}</Box>
      </Wrapper>
  )
}
