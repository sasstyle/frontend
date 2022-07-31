import { useParams } from 'react-router-dom'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppHeader from '../../core/components/AppHeader'
import Rate from '../../core/components/Rate'
import * as UI from './Review.styled'

export default function Review() {
  //   const params = useParams()
  //   const { data: review } = useGetReviewQuery({ productId: Number(params.id) })
  return (
    <>
      <AppHeader isBack title={'상품 리뷰'} />
      <UI.Wrap>
        <strong>리뷰 386개</strong>
        <UI.ReviewWrap>
          <UI.Profile>
            <strong>작성자 닉네임</strong>
            <Rate rate={3} />
          </UI.Profile>
          <p>상품이 너무 마음에 들어요~</p>
          <UI.ImageWrap>
            <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
            <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
            <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
            <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
            <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
          </UI.ImageWrap>
        </UI.ReviewWrap>
      </UI.Wrap>
    </>
  )
}
