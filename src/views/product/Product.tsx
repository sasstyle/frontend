import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppHeader from '../../core/components/AppHeader'
import ReviewCard from './components/ReviewCard'
import * as UI from './Product.styled'

export default function Product() {
  const params = useParams()
  const navigate = useNavigate()

  const { data: product, isLoading } = useGetProductDetailQuery({ id: Number(params.id) })
  const { data: reviewList } = useGetReviewQuery({ productId: Number(params.id) })

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
        <UI.ReviewSection onClick={() => navigate(`/product/review/${params.id}`)}>
          {reviewList?.totalElements !== 0 && <strong>리뷰 {reviewList?.totalElements}개</strong>}
          <UI.ReviewList>
            {reviewList?.content.map((item: any) => (
              <ReviewCard item={item} key={item.id} />
            ))}
          </UI.ReviewList>
        </UI.ReviewSection>
        <UI.ImageWrap>
          {product?.images.map((image: any) => (
            <UI.ItemImg key={image} src={image} />
          ))}
        </UI.ImageWrap>
      </UI.Wrap>
    </>
  )
}
