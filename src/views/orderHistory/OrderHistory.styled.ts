import styled from 'styled-components'
import { getColor } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  ${getFlex({ dir: 'column', ai: 'flex-start', js: 'flex-start' })}
  gap:2.3rem;
  ~ nav {
    display: none;
  }
  div {
    width: 100%;
  }
`

export const HistoryWrap = styled.div`
  ${getFlex({ dir: 'column', ai: 'flex-start' })}

  padding-bottom:1rem;
  border-bottom: 1px solid lightgray;
  & > strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`

export const Product = styled.div`
  ${getFlex({ js: 'flex-start' })}
  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
  font-size: 1rem;
  p {
    margin-bottom: 1rem;
  }
  strong {
    margin-right: 0.5rem;
  }
  span {
    ${getColor('GREY_4')}
  }
`
