import styled from 'styled-components'

interface Props {
  content: string
  onClick: (x: any) => any
  width?: string
  color?: string
  background?: string
  radius?: string
}

export default function AppButton(props: Props) {
  return <Button {...props}>{props.content}</Button>
}

const Button = styled.button<Props>`
  width: ${({ width }) => (width ? width : '100%')};
  height: auto;
  padding: 0.8rem 0;
  ${({ radius }) => radius && `border-radius : ${radius};`}
  color: ${({ color }) => (color ? color : '#ffffff')};
  background-color: ${({ background }) => (background ? background : '#010101')};
  border: none;
`
