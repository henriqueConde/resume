import { getEducationState } from '../../Utils/Functions/selectorFunctions'
import { ThemeHeading } from '../../Utils/ThemeHeading';
import { SchoolBox } from '../SchoolBox/SchoolBox'

export const Education = () => {
    const { title, schools } = getEducationState();
  return (
    <div>
        <ThemeHeading text={title} />
        {schools.map(school => {
            return <SchoolBox {...school} key={school.name}/>
        })}
    </div>
  )
}
