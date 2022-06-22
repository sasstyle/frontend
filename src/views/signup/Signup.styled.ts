import styled from 'styled-components'
import { getInnerPadding } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'center' })}
  position: relative;
  width: 100%;
  height: 100vh;
  ${getInnerPadding()}
`

export const FormWrap = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'flex-start' })}
  gap: 0.5rem;
  margin-top: 1rem;
`

export const selectWrap = styled.div`
  ${getFlex({ ai: 'flex-start' })}
  width: 100%;
  gap: 1rem;
  > select {
    width: 50%;
    margin-bottom: 0.5rem;
  }
  ~ button {
    margin-top: 0.5rem;
  }
  input {
    width: 50%;
  }
`
