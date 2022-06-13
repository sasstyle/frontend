import styled from 'styled-components'

interface Props {
  placeHolder: string
  onSetValue: (e: any) => void
  value: string
}

export default function AppInput(props: Props) {
  // const { value, onSetValue } = useInput('')

  return <Input value={props.value} onChange={props.onSetValue} placeholder={props.placeHolder}></Input>
}

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #010101;
  border-radius: 0.4rem;
  padding-left: 0.5rem;
`
