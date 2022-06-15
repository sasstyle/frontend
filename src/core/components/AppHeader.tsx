import styled from 'styled-components'
import { FiChevronLeft } from 'react-icons/fi'

interface Props {
  title: string
}

export default function AppHeader({ title }: Props) {
  return (
    <HeaderWrap>
      <FiChevronLeft />
      {title}
    </HeaderWrap>
  )
}

export const HeaderWrap = styled.div``
