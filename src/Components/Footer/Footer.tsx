import styled from "@emotion/styled/macro"
import { IContact } from "../../Model/IContact";
import { ILocation } from "../../Model/ILocation";
import { ISocial } from "../../Model/ISocial";
import { MainSeparator } from "../../Utils/Separators"
import { Body, Link } from "../../Utils/Typography";
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

interface FooterProps {
  contact: IContact;
  location: ILocation;
  social: ISocial;
}

export const Footer = ({ contact, location, social }: FooterProps) => {
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
            <BodyCentered><Link href={`mailto:${contact.email}`}>{contact.email}</Link></BodyCentered>
            <BodyCentered><Link href={`tel:${contact.phone}`}>{contact.phone}</Link></BodyCentered>
          </div>
          <div>
            <TitleBox text={social.title} />
            {social.socialLinks.map(link => {
              return (
              <BodyCentered key={link.text}>
                <Link href={link.url}>
                  {link.text}
                </Link>
              </BodyCentered>
              )
            })}
          </div>
        </TitleBoxesWrapper>
    </footer>
  )
}
