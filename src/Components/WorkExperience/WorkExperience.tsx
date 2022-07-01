import styled from '@emotion/styled/macro'
import { IWorkExperience } from '../../Model/IWorkExperience'
import { Body, BodyBold, SmallHeading } from '../../Utils/Typography'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
`;

const StyledUl = styled.ul`
    align-self: flex-start;
    padding-left: 17px;
`;

const StyledBody = styled(Body)`
    margin-bottom: 10px;
`;

export const WorkExperience = ({ 
    companyName, 
    startYear, 
    endYear, 
    position, 
    jobDescription, 
    accomplishmentsList 
}: IWorkExperience) => {
  return (
    <Wrapper>
        <SmallHeading>{companyName.toUpperCase()}</SmallHeading>
        <StyledBody>{startYear} - {endYear || 'present'}</StyledBody>
        <BodyBold>{position.toUpperCase()}</BodyBold>
        <StyledBody>{jobDescription}</StyledBody>
        <StyledUl>
            {accomplishmentsList.map(accom => {
                return <li key={accom}>{accom}</li>
            })}
        </StyledUl>
    </Wrapper>
  )
}
