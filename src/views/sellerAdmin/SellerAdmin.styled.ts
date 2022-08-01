import styled from 'styled-components'
import { getBgColor, getColor, getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  ${hideScrollBar()}
`

export const FormWrap = styled.form`
  width: 100%;
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'center' })}
  gap: 1rem;
`

export const FileSelectGroup = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1.5rem;
  margin: 1.5rem 0;
`

export const FileSelectWrap = styled.div`
  strong {
    ${getTypo({ fontSize: '1rem', fontWeight: 500 })}
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const FileSelectBox = styled.div`
  &:hover {
    cursor: pointer;
  }
  width: 4rem;
  height: 4rem;
  ${getBgColor('GREY_1')}
  border-radius: 1.1rem;
  ${getFlex()}
  label {
    ${getTypo({ fontSize: '2rem', fontWeight: 500 })}
    ${getColor('WHITE')}
    text-align: center;
    line-height: 1.5rem;
  }
  input {
    position: absolute;
    width: 3rem;
    height: 3rem;
    padding: 0;
    overflow: hidden;
    border: 0;
    /* visibility: hidden */
  }
`

export const TextAreaGroup = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1.5rem;
  margin: 1.5rem 0;
`
