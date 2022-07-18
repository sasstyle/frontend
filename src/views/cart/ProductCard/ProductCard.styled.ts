import { getFlex } from '../../../designs/util/display'
import styled from 'styled-components'
import { getBgColor, getColor, getTypo } from '../../../designs/util/atom'

export const ProductWrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  button,
  svg {
    cursor: pointer;
  }
`

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  ${getBgColor('GREY_1')}
  margin: 0.5rem 0;
`

export const BrandTitle = styled.div`
  ${getFlex({ js: 'flex-start' })}
  width: inherit;
  height: 3rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    margin-right: 0.6rem;
  }
`

export const BrandItem = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  width: inherit;
  position: relative;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }
  input {
    margin-right: 0.8rem;
  }
  strong {
    padding-top: 0.5rem;
    font-size: 1rem;
  }
  svg:last-of-type {
    position: absolute;
    right: 0;
  }
`

export const Check = styled.input`
  &[type='checkbox'] {
    display: none;
  }
  &[type='checkbox'] + label {
    display: inline-block;
    width: 25px;
    height: 25px;
    position: relative;
    border-radius: 50%;
    border: 1px solid grey;
    svg {
      display: none;
    }
    margin-right: 0.5rem;
  }
  &:checked + label {
    background-color: beige;
    svg {
      display: block;
      position: absolute;
      left: 50;
      top: 50%;
      transform: translate(-30%, -50%);
    }
  }
`

export const Counter = styled.div`
  margin: 1rem 0;
  ${getFlex({ js: 'flex-start' })}
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  button {
    ${getFlex()}
    font-size: 1.2rem;
    border-radius: 50%;
    border: none;
    width: 1.6rem;
    height: 1.6rem;
    &:hover {
      background-color: blue;
      ${getColor('WHITE')}
    }
  }
  span {
    ${getFlex()}
    border: 1px solid lightgray;
    width: 2.3rem;
    height: 1.8rem;
    border-radius: 0.5rem;
  }
`

export const TotalPrice = styled.div`
  ${getFlex({ js: 'space-between' })}
  &>span {
    ${getTypo({ fontSize: '1rem', fontWeight: 500 })}
    width: 100%;
    text-align: right;
  }
`
