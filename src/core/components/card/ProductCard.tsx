import { Product } from '../../types/product'
import * as UI from './ProductCard.styled'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { useDeleteLikeMutation, usePostLikeMutation } from '../../../api/product/product.query'
import { getToken } from '../../util/user'

export interface Props {
  product: Product
  onClick: () => void
}

export function ProductCardVertical(props: Props) {
  const { profileUrl, price, name, brandName, wish, productId } = props.product

  const [postLike] = usePostLikeMutation()
  const [deleteLike] = useDeleteLikeMutation()

  const onPostLike = (e: any) => {
    postLike({ productId })
      .unwrap()
      .then(() => {})
      .catch(() => {})
  }

  const onDeleteLike = (e: any) => {
    deleteLike({ productId })
      .unwrap()
      .then(() => {})
      .catch(() => {})
  }

  return (
    <UI.VerticalWrap
      onClick={(e) => {
        e.stopPropagation()
        props.onClick
      }}
    >
      <UI.ImgWrap>
        {getToken('access_token') && (
          <UI.LikeBtn>
            {wish ? (
              <IoHeartSharp size="1.2rem" fill={'red'} onClick={onDeleteLike} />
            ) : (
              <IoHeartOutline size="1.2rem" stroke={'black'} onClick={onPostLike} />
            )}
          </UI.LikeBtn>
        )}
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
