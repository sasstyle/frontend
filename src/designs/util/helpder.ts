import { css } from 'styled-components'

export const hideScrollBar = () => {
  const style = css`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `
  return style
}
