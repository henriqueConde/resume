import styled from '@emotion/styled/macro'
import { getCurrentLangState } from '../../Utils/Functions/selectorFunctions';
import { ThemeHeading } from '../../Utils/ThemeHeading';
import { WorkExperience } from '../WorkExperience/WorkExperience';

const Wrapper = styled.div`
    grid-column: span 2;
`;

const JobsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const WorkExperiences = () => {
  const { workExperienceText, workExperience } = getCurrentLangState();
  return (
    <Wrapper>
        <ThemeHeading text={workExperienceText} />
        <JobsWrapper>
            {workExperience.map(experience => {
                return <WorkExperience {...experience} key={experience.companyName} />
            })}
        </JobsWrapper>
    </Wrapper>
  )
}
