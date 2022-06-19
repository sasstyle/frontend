import { css } from 'styled-components'
import { TYPO } from './constant'
import { FuncCss, Typo } from './interface'

export const getTypo: FuncCss<Typo> = (params = TYPO) => {
  const style = css`
    font-size: ${params.fontSize};
    font-weight: ${params.fontWeight};
  `
  return style
}

export const getInnerPadding: FuncCss<string> = (params = '6rem') => {
  const style = css`
    margin-bottom: ${params};
  `
  return style
}
