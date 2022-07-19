import styled from "@emotion/styled/macro"
import { getFooterContent } from "../../Utils/Functions/selectorFunctions"
import { MainSeparator } from "../../Utils/Separators"
import { Body } from "../../Utils/Typography";
import { TitleBox } from "../TitleBox/TitleBox"

const TitleBoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 25px 0px;
`;

const BodyCentered = styled(Body)`
  text-align: center;
`;

export const Footer = () => {
  const [contact, location, social] = getFooterContent();
  return (
    <footer>
        <MainSeparator />
        <TitleBoxesWrapper>
          <div>
            <TitleBox text={location.title} />
            <BodyCentered>{location.location}</BodyCentered>
          </div>
          <div>
            <TitleBox text={contact.title} />
            <BodyCentered>{contact.email}</BodyCentered>
            <BodyCentered>{contact.phone}</BodyCentered>
          </div>
          <div>
            <TitleBox text={social.title} />
            {social.socialLinks.map(link => {
              return (
              <BodyCentered>
                <a href={link.url}>
                  {link.text}
                </a>
              </BodyCentered>
              )
            })}
          </div>
        </TitleBoxesWrapper>
    </footer>
  )
}
