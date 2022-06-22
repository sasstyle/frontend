import { FaRegHeart } from 'react-icons/fa'
import { Product } from '../../../views/home/Home.interface'
import * as UI from './ProductCard.styled'

export interface Props {
  product: Product
  onClick: () => void
}

export function ProductCardVertical(props: Props) {
  const { imgUrl, price, name, brand, likeCnt, kind, rating, isLike } = props.product

  return (
    <UI.VerticalWrap onClick={props.onClick}>
      <UI.ImgWrap>
        <UI.LikeBtn>
          <FaRegHeart size="1rem" />
        </UI.LikeBtn>
        <img src={imgUrl} />
      </UI.ImgWrap>
      <strong>{brand}</strong>
      <p>{name}</p>
      <span>{Number(price).toLocaleString()}원</span>
    </UI.VerticalWrap>
  )
}

export function ProductCardHorizontal() {
  return <UI.HorizontalWrap></UI.HorizontalWrap>
}
