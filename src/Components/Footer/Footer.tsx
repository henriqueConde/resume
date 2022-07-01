import styled from "@emotion/styled/macro"
import { MainSeparator } from "../../Utils/Separators"
import { Contact } from "../Contact/Contact"
import { Location } from "../Location/Location"
import { SocialFooter } from "../SocialBox/SocialFooter"

const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`

export const Footer = () => {
  return (
    <footer>
        <MainSeparator />
        <BoxesWrapper>
          <Location />
          <Contact />
          <SocialFooter />
        </BoxesWrapper>
    </footer>
  )
}
