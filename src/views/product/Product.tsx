import { useParams } from 'react-router-dom'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppHeader from '../../core/components/AppHeader'
import ReviewCard from './components/ReviewCard'
import * as UI from './Product.styled'

export default function Product() {
  const params = useParams()

  const { data: product, isLoading } = useGetProductDetailQuery({ id: Number(params.id) })
  const { data: review } = useGetReviewQuery({ productId: Number(params.id) })

  return (
    <>
      <AppHeader isBack title={product?.name || ''} />
      <UI.Wrap>
        <UI.TopImg src={product?.profileUrl} />
        {/* <UI.ShadowImg /> */}
        <UI.TitleBar>
          <strong>{product?.brandName}</strong>
        </UI.TitleBar>
        <UI.EssentialInfo>
          <p>{product?.name}</p>
          <span>{Number(product?.price).toLocaleString()}원</span>
        </UI.EssentialInfo>
        <UI.ReviewSection>
          <strong>리뷰 {review?.content.length}개</strong>
          {/* <p>리뷰를 작성한 사람 중 93%가 만족한 상품이에요</p> */}
          <UI.ReviewList>
            {review?.content.map((item) => (
              <div>test</div>
              // <ReviewCard item={item} key={item.userId} />
            ))}
          </UI.ReviewList>
        </UI.ReviewSection>
        <UI.ImageWrap>
          {product?.images.map((image: any) => (
            <UI.ItemImg src={image} />
          ))}
        </UI.ImageWrap>
      </UI.Wrap>
    </>
  )
}
