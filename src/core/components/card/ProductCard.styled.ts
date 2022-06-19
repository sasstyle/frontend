import styled from 'styled-components'
import { getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export const VerticalWrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 9rem;
  height: 16rem;
  background: #ffffff;

  img {
    width: inherit;
    height: 10rem;
    margin-bottom: 0.7rem;
    object-fit: cover;
  }
  strong {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  p {
    ${getTypo({ fontSize: '0.75rem' })}
    margin-bottom: 0.5rem;
  }
  span {
    ${getTypo({ fontSize: '0.9rem', fontWeight: 700 })}
  }
`

export const HorizontalWrap = styled.div`
  width: 100%;
  height: 5rem;
  background: #ffffff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 6rem;
`
