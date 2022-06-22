import { useParams } from 'react-router-dom'
import ReviewCard from './components/ReviewCard'
import { useRequestProductDetailQuery } from './Porudct.query'
import { DUMMY_REVIEW_LIST } from './Product.constant'
import * as UI from './Product.styled'

export default function Product() {
  const params = useParams()

  const { data: product, isLoading } = useRequestProductDetailQuery(Number(params.id))

  return (
    <UI.Wrap>
      <UI.TopImg src={product?.imgUrl} />
      <UI.ShadowImg />
      <UI.TitleBar>
        <strong>{product?.brand}</strong>
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
