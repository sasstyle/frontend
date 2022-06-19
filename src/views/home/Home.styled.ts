import styled from 'styled-components'
import { getInnerPadding } from './../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  ${getInnerPadding()}
`

export const ProductWrap = styled.section`
  ${getFlex({ js: 'space-between', ai: 'flex-start' })}
  ${hideScrollBar()}
  flex-wrap:wrap;
  width: 100%;
  height: 70vh;
  overflow-y: scroll;
`

export const SearchWrap = styled.div`
  width: 100%;
  ${getFlex()}
`
