import styled from 'styled-components'
import { getFlex, getMediaScreen } from './designs/util/display'

export const AppInner = styled.main`
  ${getFlex({ dir: 'column' })}
  width: 100vw;
  height: 100vh;
  padding: 0 1.8rem;
  margin: 0 auto;
  ${getMediaScreen()}
  overflow: hidden;
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
`
