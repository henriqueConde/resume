import { ISchool } from '../../Model/ISchool'
import { Body, SmallHeading } from '../../Utils/Typography'

export const SchoolBox = ({
  name, 
  startYear, 
  finnishYear, 
  degree
}: ISchool) => {
  return (
    <div>
      <SmallHeading>{name.toUpperCase()}</SmallHeading>
      <Body>{startYear} - {finnishYear}</Body>
      <Body>{degree}</Body>
    </div>
  )
}
