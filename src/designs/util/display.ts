import { css } from 'styled-components'
import { FLEX } from './constant'
import { Flex, FuncCss } from './interface'

export const getFlex: FuncCss<Flex> = (params = FLEX) => {
  const style = css`
    display: flex;
    flex-direction: ${params.dir};
    justify-content: ${params.js};
    align-items: ${params.ai};
  `
  return style
}
