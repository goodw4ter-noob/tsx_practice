import React, { ReactNode } from 'react'
import { TabKeys } from '../Card'

type Props = {
    href: string,
    children: ReactNode,
    onClick: React.Dispatch<React.SetStateAction<TabKeys>>,
}

function Link({href, children, onClick}: Props) {
  return (
    <a href={href} onClick={() => onClick(1)} >
        {children}
    </a>
  )
}

export default Link;

