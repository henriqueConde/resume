import { SkillTypesEnum } from '../../Model/SkillTypesEnum';
import { getCurrentLangState } from '../../Utils/Functions/selectorFunctions';
import { ThemeHeading } from '../../Utils/ThemeHeading';
import { Skill } from '../Skill/Skill';

export const PersonalSkills = () => {
  const { personalSkills, skills } = getCurrentLangState();
  const personalSkillsArr = skills.filter(skill => skill.type === SkillTypesEnum.personal);
  return (
    <div>
        <ThemeHeading text={personalSkills} />
        {personalSkillsArr.map(skill => {
            return <Skill {...skill} key={skill.name}/>
        })}
    </div>
  )
}
