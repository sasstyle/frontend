import styled from 'styled-components'
import { getFlex } from '../../../designs/util/display'

export const VerticalWrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  padding: 1rem;
  width: 12rem;
  height: 16rem;
  background: #ffffff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 1rem;
  img {
    width: 8rem;
    height: 8rem;
    margin-bottom: 0.7rem;
  }
  strong {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const HorizontalWrap = styled.div`
  width: 100%;
  height: 5rem;
  background: #ffffff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 6rem;
`
