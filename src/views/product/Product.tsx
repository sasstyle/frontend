import { useParams } from 'react-router-dom'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import ReviewCard from './components/ReviewCard'

import { DUMMY_REVIEW_LIST } from './Product.constant'
import * as UI from './Product.styled'

export default function Product() {
  const params = useParams()

  const { data: product, isLoading } = useGetProductDetailQuery({ id: Number(params.id) })
  console.log(product)

  return (
    <UI.Wrap>
      <UI.TopImg src={product?.images[0]} />
      <UI.ShadowImg />
      <UI.TitleBar>
        <strong>{product?.brandName}</strong>
      </UI.TitleBar>
      <UI.EssentialInfo>
        <p>{product?.name}</p>
        <span>{Number(product?.price).toLocaleString()}원</span>
      </UI.EssentialInfo>
      <UI.ReviewSection>
        <span>리뷰 20개</span>
        <p>리뷰를 작성한 사람 중 93%가 만족한 상품이에요</p>
        <UI.ReviewList>
          {DUMMY_REVIEW_LIST.map((item) => (
            <ReviewCard item={item} key={item.userId} />
          ))}
        </UI.ReviewList>
      </UI.ReviewSection>
    </UI.Wrap>
  )
}
