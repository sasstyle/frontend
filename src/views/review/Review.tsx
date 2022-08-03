import { useParams } from 'react-router-dom'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppHeader from '../../core/components/AppHeader'
import Rate from '../../core/components/Rate'
import * as UI from './Review.styled'

export default function Review() {
  const params = useParams()
  const { data: reviewList } = useGetReviewQuery({ productId: Number(params.id) })

  return (
    <>
      <AppHeader isBack title={'상품 리뷰'} />
      <UI.Wrap>
        <strong>리뷰 {reviewList?.totalElements}개</strong>
        {reviewList?.content.map((review) => (
          <UI.ReviewWrap>
            <UI.Profile>
              <strong>작성자 닉네임</strong>
              <Rate rate={review.rate} />
            </UI.Profile>
            <p>{review.content}</p>
            <UI.ImageWrap>
              <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
              <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
              <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
              <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
              <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/test2.png" alt="img" />
            </UI.ImageWrap>
          </UI.ReviewWrap>
        ))}
      </UI.Wrap>
    </>
  )
}
