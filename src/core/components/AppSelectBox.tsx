import styled from 'styled-components'

interface Props {
  optionList: Array<string>
  onSetValue: (e: any) => void
}

export default function AppSelectBox({ optionList, onSetValue }: Props) {
  return (
    <Select name="gender" onChange={onSetValue}>
      {optionList.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </Select>
  )
}

const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #f4f4f4;
  padding: 0 1rem;
`
