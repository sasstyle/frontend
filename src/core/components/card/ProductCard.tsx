import { Product } from '../../../views/home/Home.interface'
import * as UI from './ProductCard.styled'

export interface Props {
  product: Product
  onClick: () => void
}

export function ProductCardVertical(props: Props) {
  const { imgUrl, price, name, brand, likeCnt, kind, rating } = props.product
  return (
    <UI.VerticalWrap onClick={props.onClick}>
      <img src={imgUrl} />
      <strong>{brand}</strong>
      <p>{name}</p>
      <span>{Number(price).toLocaleString()}원</span>
    </UI.VerticalWrap>
  )
}

export function ProductCardHorizontal() {
  return <UI.HorizontalWrap></UI.HorizontalWrap>
}
