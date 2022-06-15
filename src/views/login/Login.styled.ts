import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'

export const LoginWrap = styled.div`
  width: 100%;
  ${getFlex({ dir: 'column' })}
  transform: translateY(-4rem);
  button {
    margin-top: 0.5rem;
  }
`

export const Link = styled.link``
