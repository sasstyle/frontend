import styled from 'styled-components'
import { getFlex, getMaxMediaScreen } from './designs/util/display'

export const AppInner = styled.main`
  ${getFlex({ dir: 'column' })}
  width: 100vw;
  height: 100%;
  padding: 0 1.8rem;
  margin: 0 auto;
  ${getMaxMediaScreen({ maxWidth: '528px' })}
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
`
