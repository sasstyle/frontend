import styled from 'styled-components'
import { getFlex, getMaxMediaScreen } from '../../designs/util/display'
import { getColor, getTypo } from '../../designs/util/atom'
import { ReactElement } from 'react'

interface Props {
  title: string
  icon?: ReactElement
}

export default function AppHeader({ title, icon }: Props) {
  return (
    <HeaderWrap>
      <span>{title}</span>
      {icon && icon}
    </HeaderWrap>
  )
}

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.4rem;
  padding: 1.8rem;
  background-color: #ffffff;
  z-index: 100;
  ${getFlex({ js: 'space-between' })} ${getMaxMediaScreen()} span {
    ${getTypo({ fontSize: '1.22rem', fontWeight: 700 })}
    ${getColor('BLACK')}
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
    ${getColor('GREY_4')}
  }
`
