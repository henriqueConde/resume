// import { TitleHero } from './Components/TitleHero/TitleHero';
import styled from '@emotion/styled/macro'
import { ContentBox } from './Components/ContentBox/ContentBox';
import { Footer } from './Components/Footer/Footer';
import { ListItem } from './Components/ListItem/ListItem';
import { Tag } from './Components/Tag/Tag';
import { InfoCard } from './Components/InfoCard/InfoCard';
import { SkillTypesEnum } from './Model/SkillTypesEnum';
import { getCurrentLangState, getSocialLinks } from './Utils/Functions/selectorFunctions';
import { Body } from './Utils/Typography';
import { TitleHero } from './Components/TitleHero/TitleHero';

const GlobalWrapper = styled.div`
  max-width: 80rem;
  width: 100vw;
  margin: 0 auto;
`;

const Header = styled.header`
    &:before {
      content: '';
      max-width: 80rem;
      width: 100vw;
      height: 100px;
      background-color: #7ABCAC;
      position: absolute;
      top: -36px;
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

const {
  aboutMe, 
  bio,
  links,
  education,
  skills,
  personalSkills,
  technicalSkills,
  workExperience,
  workExperienceText
} = getCurrentLangState();

const socialLinks = getSocialLinks();

const WorkExperiencesWrapper = styled.div`
    grid-column: span 2;

    .work-experiences__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
`;

function App() {
  return (
    <GlobalWrapper>
      <Header>
        <TitleHero />
      </Header>
      <Main>
        <ContentBox title={links}>
            {socialLinks.map(socialLink => {
              return <ListItem url={socialLink.url} text={socialLink.text} icon={socialLink.icon} />
            })}
        </ContentBox>
        <ContentBox title={aboutMe}>
            <Body>{bio}</Body>
        </ContentBox>
        <ContentBox title={education.title}>
            <Body>{bio}</Body>
        </ContentBox>
        <SkillsWrapper>
          <ContentBox title={personalSkills}>
              {skills.filter(skill => skill.type === SkillTypesEnum.personal).map(skill => {
                return <Tag name={skill.name} color={skill.level} />
              })}
          </ContentBox>
          <ContentBox title={technicalSkills}>
              {skills.filter(skill => skill.type === SkillTypesEnum.technical).map(skill => {
                return <Tag name={skill.name} color={skill.level} />
              })}
          </ContentBox>
        </SkillsWrapper>
        <WorkExperiencesWrapper>
          <ContentBox title={workExperienceText}>
              <div className='work-experiences__container'>
                {workExperience.map(experience => {
                    return (
                      <InfoCard 
                      title={experience.companyName} 
                      startDate={experience.startYear}
                      endDate={experience?.endYear}
                      description1={experience.position} 
                      description2={experience.jobDescription} 
                      listItems={experience.accomplishmentsList} 
                      />
                    )
                  })}
              </div>
          </ContentBox>
        </WorkExperiencesWrapper>
      </Main>
      <Footer />
    </GlobalWrapper>
  );
}

export default App;
