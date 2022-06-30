import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props {
  placeHolder: string
  onSetValue: (e: any) => void
  value: string
  label?: string
}

export default function AppInput(props: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      {props.label && <label htmlFor={props.value}>{props.label}</label>}
      <Input id={props.value} value={props.value} onChange={props.onSetValue} placeholder={props.placeHolder} />
    </>
  )
}

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.6rem;
  background-color: #f4f4f4;
  border: none;
  &:last-child {
    margin-bottom: 0;
  }
  &:focus {
    outline: none;
  }
`
