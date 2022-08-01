import { ReactNode } from 'react'
import { ThemeHeading } from '../../Utils/ThemeHeading';

interface ContentBoxProps {
    title: string;
    children: ReactNode;
}

export const ContentBox = ({title, children}: ContentBoxProps) => {
  return (
    <div>
        <ThemeHeading title={title} />
        <div>
            {children}
        </div>
    </div>
  )
}
