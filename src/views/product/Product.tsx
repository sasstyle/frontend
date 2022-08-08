import { useNavigate, useParams } from 'react-router-dom'
import { usePostFittingMutation } from '../../api/fitting/fitting.query'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import { sliceLetter } from '../../designs/util/helpder'
import ReviewCard from './components/ReviewCard'
import * as UI from './Product.styled'

export default function Product() {
  const params = useParams()
  const navigate = useNavigate()

  const { data: product, isLoading } = useGetProductDetailQuery({ id: Number(params.id) })
  const { data: reviewList } = useGetReviewQuery({ productId: Number(params.id) })

  const [postFitting, result] = usePostFittingMutation()

  const onPostFitting = () => {}

  return (
    <>
      <AppHeader isBack title={sliceLetter(product?.name, 15) || ''} />
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
        <AppButton
          content="👕 피팅해보기"
          onClick={onPostFitting}
          background="white"
          color="black"
          radius="0.5rem"
          style={{ marginTop: '1.2rem', border: '1px solid black' }}
        />
        <UI.FittingHelper>
          내가 등록한 프로필 사진 위에 옷이 피팅됩니다. <br />
          혹시 등록하지 않았다면 <a href="/user">마이페이지</a>에서 사진을 추가해주세요.
        </UI.FittingHelper>
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
            <UI.ItemImg key={image} src={image} alt={'상품 이미지'} />
          ))}
        </UI.ImageWrap>
      </UI.Wrap>
    </>
  )
}
