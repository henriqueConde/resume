import styled from '@emotion/styled/macro'
import { Link } from '../../Utils/Typography';

interface ListItemProps {
  text: string;
  url: string;
  icon?: string;
  onClick?: Function;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  justify-items: start;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  width: 20px;
`;

export const ListItem = ({ text, url, icon }: ListItemProps) => {
  return (
    <Wrapper>
      {icon ? <Icon src={icon} alt={text} /> : <div></div>}
        <Link href={url} >
          {text}
        </Link>
    </Wrapper>
  )
}
