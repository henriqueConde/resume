import styled from '@emotion/styled/macro';
import { ColorsEnum } from '../../Model/ColorsEnum';
import { BodyBold } from '../../Utils/Typography';

interface TagProps {
    name: string;
    color: string;
}

const Wrapper = styled.div<{color: string}>`
    border-radius: 16px;
    margin-top: 20px;
    padding: 2px 13px;
    color: black;
    display: flex;
    flex-direction: column;
    text-align: center;

    ${({ color }) =>
        color &&
        `
           background-color: ${ColorsEnum[color as keyof typeof ColorsEnum]};
        `}
`;

export const Tag = ({name, color}: TagProps) => {
  return(
    <Wrapper color={color}>
      <BodyBold>{name.toUpperCase()}</BodyBold>
    </Wrapper>
  )
}
