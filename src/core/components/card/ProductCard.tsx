import { FaRegHeart } from 'react-icons/fa'
import { Product } from '../../types/product'
import * as UI from './ProductCard.styled'

export interface Props {
  product: Product
  onClick: () => void
}

export function ProductCardVertical(props: Props) {
  const { profileUrl, price, name, brandName } = props.product

  return (
    <UI.VerticalWrap onClick={props.onClick}>
      <UI.ImgWrap>
        <UI.LikeBtn>
          <FaRegHeart size="1rem" />
        </UI.LikeBtn>
        <img src={profileUrl} />
      </UI.ImgWrap>
      <strong>{brandName}</strong>
      <p>{name}</p>
      <span>{Number(price).toLocaleString()}원</span>
    </UI.VerticalWrap>
  )
}

export function ProductCardHorizontal() {
  return <UI.HorizontalWrap></UI.HorizontalWrap>
}
