import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 100%;
  height: 100vh;
  padding: 5rem 0 7rem 0;
  gap: 1rem;
  overflow-y: scroll;
  button:last-of-type {
    margin-top: 0.5rem;
  }
`
