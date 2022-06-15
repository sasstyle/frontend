import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'

export const selectWrap = styled.div`
  ${getFlex({ ai: 'flex-start' })}
  gap: 1rem;
  > select {
    margin-bottom: 0.5rem;
  }
  ~ button {
    margin-top: 0.5rem;
  }
`
