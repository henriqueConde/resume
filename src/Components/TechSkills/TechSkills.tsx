import { SkillTypesEnum } from '../../Model/SkillTypesEnum';
import { getCurrentLangState } from '../../Utils/Functions/selectorFunctions';
import { ThemeHeading } from '../../Utils/ThemeHeading';
import { Skill } from '../Skill/Skill';

export const TechSkills = () => {
  const { technicalSkills, skills } = getCurrentLangState();
  const technicalSkillsArr = skills.filter(skill => skill.type === SkillTypesEnum.technical);
  return (
    <div>
        <ThemeHeading text={technicalSkills} />
        {technicalSkillsArr.map(skill => {
            return <Skill {...skill} key={skill.name}/>
        })}
    </div>
  )
}
