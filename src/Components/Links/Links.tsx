import { getCurrentLangState, getSocialLinks } from '../../Utils/Functions/selectorFunctions';
import { Social } from '../Social/Social';
import styled from '@emotion/styled/macro'
import { ThemeHeading } from '../../Utils/ThemeHeading';

const SocialLinks = styled.div`
    margin: 15px 0;
`

export const Links = () => {
  const socialLinks = getSocialLinks();
  const { links } = getCurrentLangState();
  return (
      <div>
          <ThemeHeading text={links} />
          <SocialLinks>
            {socialLinks.map(social => {
                return <Social {...social} key={social.text} />
            })}
          </SocialLinks>
      </div>
  )
}
