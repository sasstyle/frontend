import styled from 'styled-components'

interface Props {
  placeHolder: string
  onSetValue: (e: any) => void
  value: string
}

export default function AppInput(props: Props) {
  return <Input value={props.value} onChange={props.onSetValue} placeholder={props.placeHolder}></Input>
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
`
