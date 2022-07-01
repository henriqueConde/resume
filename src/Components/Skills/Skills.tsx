import styled from '@emotion/styled/macro'
import { PersonalSkills } from '../PersonalSkills/PersonalSkills'
import { TechSkills } from '../TechSkills/TechSkills'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

export const Skills = () => {
  return (
    <Wrapper>
      <PersonalSkills />
      <TechSkills />
    </Wrapper>
  )
}
