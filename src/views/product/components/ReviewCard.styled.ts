import styled from 'styled-components'
import { getFlex } from '../../../designs/util/display'

export const Wrap = styled.li`
  ${getFlex({ dir: 'row', js: 'flex-start', ai: 'flex-start' })}
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

  img {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }
`

export const WriterInfo = styled.div`
  ${getFlex({ js: 'flex-start' })}
  strong {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    width: 2.8rem;
  }

  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
`
