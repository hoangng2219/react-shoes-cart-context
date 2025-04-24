import React from 'react'

interface TypographyProps extends React.PropsWithChildren {
    className?: string;
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const Typography = ({children,className,component:Component='div'}:TypographyProps) => {
  return (
    <Component className={className}>{children}</Component>
  )
}
//30.06

export default Typography