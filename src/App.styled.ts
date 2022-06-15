import styled from 'styled-components'
import { getFlex, getMediaScreen } from './designs/util/display'

export const AppInner = styled.main`
  ${getFlex({ dir: 'column' })}
  width: 100vw;
  height: 100vh;
  padding: 0 3rem;
  margin: 0 auto;
  ${getMediaScreen()}
  overflow: hidden;
`
