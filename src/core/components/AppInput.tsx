import styled from 'styled-components'
import { useInput } from '../hooks/useInput'

interface Props {
  placeHolder: string
}

export default function AppInput(props: Props) {
  const { value, onSetValue } = useInput('')

  return <Input value={value} onChange={onSetValue} placeholder={props.placeHolder}></Input>
}

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #010101;
  border-radius: 0.4rem;
  padding-left: 0.5rem;
`
