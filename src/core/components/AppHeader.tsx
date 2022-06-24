import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'
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
  ${getFlex({ js: 'space-between' })}
  height: 3.4rem;
  span {
    ${getTypo({ fontSize: '1.3rem', fontWeight: 700 })}
    ${getColor('BLACK')}
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
    ${getColor('GREY_4')}
  }
`
