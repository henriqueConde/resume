import styled from '@emotion/styled/macro';
import { ColorsEnum } from '../../Model/ColorsEnum';
import { BodyBold } from '../../Utils/Typography';

interface SkillProps {
    name: string;
    level: string;
}

const Wrapper = styled.div<{level: string}>`
    width: 12rem;
    border-radius: 16px;
    margin-top: 20px;
    padding: 2px 13px;
    color: black;

    ${({ level }) =>
        level &&
        `
           background-color: ${ColorsEnum[level as keyof typeof ColorsEnum]};
        `}
`;

export const Skill = ({name, level}: SkillProps) => {
  return(
    <Wrapper level={level}>
      <BodyBold>{name.toUpperCase()}</BodyBold>
    </Wrapper>
  )
}
