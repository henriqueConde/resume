import styled from '@emotion/styled/macro'
import { ContentBox } from './Components/ContentBox/ContentBox';
import { Footer } from './Components/Footer/Footer';
import { ListItem } from './Components/ListItem/ListItem';
import { Tag } from './Components/Tag/Tag';
import { InfoCard } from './Components/InfoCard/InfoCard';
import { SkillTypesEnum } from './Model/SkillTypesEnum';
import { getCurrentLangState } from './Utils/Functions/selectorFunctions';
import { Body, BodyBold } from './Utils/Typography';
import { TitleHero } from './Components/TitleHero/TitleHero';
import { MainSeparator } from './Utils/Separators';
import React from 'react';
import { INITIAL_STATE } from './Development/initialState';
import { LangMenu } from './Components/LangMenu/LangMenu';

const GlobalWrapper = styled.div`
  max-width: 80rem;
  width: 100vw;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

const Header = styled.header`
    &:before {
      content: '';
      max-width: 80rem;
      width: 100vw;
      height: 100px;
      background-color: #7ABCAC;
      position: absolute;
      top: -55px;
    }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 65px;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 65px;
`;


const WorkExperiencesWrapper = styled.div`
    grid-column: span 2;

    .work-experiences__infocards-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
`;

const StyledMainSeparator = styled(MainSeparator)`
  margin: 20px 0px;
  width: 60%;
`;

const FlexDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [curLang, setCurLang] = React.useState<string>('');

  const { socialLinks, availableLangs } = INITIAL_STATE;

  const {
    aboutMe, 
    bio,
    links,
    education,
    skills,
    personalSkills,
    technicalSkills,
    workExperience,
    workExperienceText,
    personalInfo,
    contact,
    location,
    social
  } = getCurrentLangState();

  const handleClick = (event: any) => {
    INITIAL_STATE.currentLang = event.target.value;
    setCurLang(event.target.value);
  }

  return (
    <GlobalWrapper>
      <LangMenu 
      onChange={handleClick} 
      availableLangs={availableLangs} 
      />
      <Header>
        <TitleHero {...personalInfo}/>
      </Header>
      <Main>
        <ContentBox title={links}>
            {socialLinks.map(socialLink => {
              return <ListItem url={socialLink.url} text={socialLink.text} icon={socialLink.icon} key={socialLink.text}/>
            })}
        </ContentBox>
        <ContentBox title={aboutMe}>
            <Body>{bio}</Body>
        </ContentBox>
        <ContentBox title={education.title}>
            {education.schools.map((school, index) => {
              return (
                <div key={school.name}>
                  <BodyBold>{school.name.toUpperCase()}</BodyBold>
                  <BodyBold>{school.startYear} - {school.finnishYear}</BodyBold>
                  <BodyBold>{school.degree}</BodyBold>
                  {index % 2 === 0 ? <StyledMainSeparator /> : ''}
                </div>
              )
            })}
        </ContentBox>
        <SkillsWrapper>
          <ContentBox title={personalSkills}>
              <FlexDiv>
                {skills.filter(skill => skill.type === SkillTypesEnum.personal).map(skill => {
                  return <Tag name={skill.name} color={skill.level} key={skill.name} />
                })}
              </FlexDiv>
          </ContentBox>
          <ContentBox title={technicalSkills}>
              <FlexDiv>
                {skills.filter(skill => skill.type === SkillTypesEnum.technical).map(skill => {
                  return <Tag name={skill.name} color={skill.level} key={skill.name} />
                })}
              </FlexDiv>
          </ContentBox>
        </SkillsWrapper>
        <WorkExperiencesWrapper>
          <ContentBox title={workExperienceText}>
              <div className='work-experiences__infocards-container'>
                {workExperience.map(experience => {
                    return (
                      <InfoCard 
                      title={experience.companyName} 
                      startDate={experience.startYear}
                      endDate={experience?.endYear}
                      description1={experience.position} 
                      description2={experience.jobDescription} 
                      listItems={experience.accomplishmentsList}
                      key={experience.companyName}
                      />
                    )
                  })}
              </div>
          </ContentBox>
        </WorkExperiencesWrapper>
      </Main>
      <Footer contact={contact} location={location} social={social}/>
    </GlobalWrapper>
  );
}

export default App;
