import { getCurrentLangState } from '../../Utils/Functions/selectorFunctions'
import { ThemeHeading } from '../../Utils/ThemeHeading';
import { Body } from '../../Utils/Typography'

export const AboutMe = () => {
  const { aboutMe, bio } = getCurrentLangState();
  return (
    <div>
        <ThemeHeading text={aboutMe} />
        <Body>{bio}</Body>
    </div>
  )
}
