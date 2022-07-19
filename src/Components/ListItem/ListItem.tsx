import styled from '@emotion/styled/macro'

interface ListItemProps {
  text: string;
  url: string;
  icon?: string;
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

const Button = styled.button`
  border: none;
  font-size: 16px;
`;

export const ListItem = ({ text, url, icon }: ListItemProps) => {
  return (
    <Wrapper>
      {icon ? <Icon src={icon} alt={text} /> : <div></div>}
      <Button>
        <a href={url} >
          {text}
        </a>
      </Button>
    </Wrapper>
  )
}
