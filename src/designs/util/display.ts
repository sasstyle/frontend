import { css } from 'styled-components'
import { BREAK_POINT, FLEX, MEDIA_SCREEN } from './constant'
import { Flex, FuncCss, MediaScreen } from './interface'

export const getFlex: FuncCss<Flex> = (params = FLEX) => {
  const style = css`
    display: flex;
    flex-direction: ${params.dir};
    justify-content: ${params.js ? params.js : 'center'};
    align-items: ${params.ai ? params.ai : 'center'};
  `
  return style
}

export const getMediaScreen: FuncCss<MediaScreen> = (params = MEDIA_SCREEN) => {
  const style = css`
    @media screen and (min-width: ${BREAK_POINT}) {
      max-width: ${params.maxWidth};
      ${params.maxHeight !== '' && `max-height: ${params.maxHeight}`}
    }
  `
  return style
}
