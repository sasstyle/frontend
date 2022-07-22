import { hideScrollBar } from './../../designs/util/helpder'
import styled from 'styled-components'
import { getInnerPadding, getTypo } from '../../designs/util/atom'
import { getFlex, setMediaScreen } from '../../designs/util/display'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', ai: 'flex-start', js: 'flex-start' })}
  width: 100%;
  height: 100%;
  ${getInnerPadding()}
`

export const ShadowImg = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #ffffff;
  ${setMediaScreen(`display: none;`)}
`

export const TopImg = styled.img`
  /* position: absolute; */
  /* transform: translateX(-50%); */
  top: 0;
  left: 50%;
  width: 100%;
  height: 18rem;
  object-fit: cover;
  max-width: 530px;
`

export const TitleBar = styled.div`
  ${getFlex({ dir: 'row', ai: 'center', js: 'flex-start' })}
  width: 100%;
  height: 4rem;
  strong {
    ${getTypo({ fontSize: '1rem' })}
  }
`

export const EssentialInfo = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'flex-start' })}
  width: inherit;
  height: 4rem;
  ${getTypo({ fontSize: '1rem' })}
  span {
    margin-top: 0.5rem;
    ${getTypo({ fontSize: '1rem', fontWeight: 700 })}
    letter-spacing: 0.01rem;
  }
`

export const ReviewSection = styled.section`
  ${getFlex({ dir: 'column', js: 'center', ai: 'flex-start' })}
  width: inherit;
  margin-top: 1.5rem;
  span {
    font-size: 0.8rem;
    color: blue;
  }
  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`
export const ReviewList = styled.ul`
  display: grid;
  width: 100%;
  margin-top: 0.8rem;
  grid-template-columns: 14rem;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  ${hideScrollBar()}
`

export const ItemImg = styled.img`
  width: 100%;
  height: auto;
`

export const ImageWrap = styled.div`
  /* ${setMediaScreen(`margin-top: 12rem;`)} */
  margin: 2rem 0;
`
