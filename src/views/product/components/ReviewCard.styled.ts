import styled from 'styled-components'
import { getFlex } from '../../../designs/util/display'

export const Wrap = styled.li`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 13rem;
  height: 5rem;
  padding: 0.8rem;
  border: 0.5px solid lightgray;
  border-radius: 0.5rem;

  strong {
    font-size: 0.8rem;
  }
  p {
    line-height: 1.2rem;
  }
`
