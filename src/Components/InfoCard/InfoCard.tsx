import styled from '@emotion/styled/macro'
import { Body, BodyBold, SmallHeading } from '../../Utils/Typography'

interface InfoCardProps {
    title: string;
    startDate: number;
    endDate?: number;
    listItems: string[];
    description1: string;
    description2: string;
}

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

export const InfoCard = ({ 
    title,
    startDate,
    endDate,
    listItems,
    description1,
    description2,
}: InfoCardProps) => {
  return (
    <Wrapper>
        <SmallHeading>{title.toUpperCase()}</SmallHeading>
        <StyledBody>{startDate} - {endDate || 'present'}</StyledBody>
        <BodyBold>{description1.toUpperCase()}</BodyBold>
        <StyledBody>{description2}</StyledBody>
        <StyledUl>
            {listItems.map(accom => {
                return <li key={accom}>{accom}</li>
            })}
        </StyledUl>
    </Wrapper>
  )
}
