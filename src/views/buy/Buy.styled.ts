import { getFlex } from './../../designs/util/display'
import styled from 'styled-components'
import { getBgColor, getColor } from '../../designs/util/atom'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start' })}
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 4.2rem 0 7rem 0;
  div {
    width: 100%;
  }
`

export const BuyInfo = styled.div`
  strong {
    font-size: 1rem;
  }
  ul {
    margin-top: 1rem;
    li:last-of-type {
      margin-bottom: 2rem !important;
    }
  }
  li {
    margin-bottom: 2rem;
    width: 100%;
  }
`
export const Hr = styled.div`
  width: 100%;
  height: 1px;
  ${getBgColor('GREY_1')}
  margin: 0.5rem 0;
`

export const BrandTitle = styled.div`
  ${getFlex({ js: 'flex-start' })}
  width: inherit;
  height: 3rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    margin-right: 0.6rem;
  }
`

export const BrandItem = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  width: inherit;
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }
  input {
    margin-right: 0.8rem;
  }
  strong {
    padding-top: 0.5rem;
    font-size: 1rem;
  }
  svg:last-of-type {
    position: absolute;
    right: 0;
  }
`

export const UserInfo = styled.div`
  margin-top: 2rem;
  ${getFlex({ dir: 'column', ai: 'flex-start' })}
  gap: 0.5rem;
  strong {
    font-size: 1.5rem;
  }
  p:first-of-type {
    font-size: 1rem;
  }
  p:last-of-type {
    font-size: 1rem;
    ${getColor('GREY_4')}
  }
`

export const PayInfo = styled.div`
  margin-top: 2rem;
  ${getFlex({ js: 'space-between' })}
  strong {
    font-size: 1.1rem;
  }
  span {
    font-size: 1rem;
    ${getColor('GREY_4')}
    font-size: 1.5rem;
  }
`
