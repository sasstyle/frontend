import styled from 'styled-components'

import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 0 2rem 0;
  overflow-y: scroll;
  ${hideScrollBar()}
  gap: 1rem;
  ~ nav {
    display: none;
  }
`

export const ImgList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    object-fit: cover;
  }
`

export const ModalImg = styled.img`
  width: 16rem;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  object-fit: cover;
`
