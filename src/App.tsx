import { TitleHero } from './Components/TitleHero/TitleHero';
import styled from '@emotion/styled/macro'
import { Links } from './Components/Links/Links';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Education } from './Components/Education/Education';
import { Skills } from './Components/Skills/Skills';
import { WorkExperiences } from './Components/WorkExperiences/WorkExperiences';
import { Footer } from './Components/Footer/Footer';

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

function App() {
  return (
    <GlobalWrapper>
      <Header>
        <TitleHero />
      </Header>
      <Main>
        <Links />
        <AboutMe />
        <Education />
        <Skills />
        <WorkExperiences />
      </Main>
      <Footer />
    </GlobalWrapper>
  );
}

export default App;
