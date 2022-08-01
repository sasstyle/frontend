import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import * as UI from './Review.styled'

export default function CreateReview() {
  const [rating, setRating] = useState(0)
  return (
    <>
      <AppHeader title="리뷰 쓰기" isBack />
      <UI.Wrap>
        <UI.WriteWrap>
          <strong>리뷰를 작성해주세요.</strong>
          <textarea placeholder="텍스트 리뷰"></textarea>
        </UI.WriteWrap>
        <UI.WriteWrap>
          <strong>별점</strong>
          <div>
            {rating < 1 ? (
              <AiOutlineStar size="2rem" onClick={() => setRating(1)} />
            ) : (
              <AiFillStar size="2rem" onClick={() => setRating(1)} />
            )}
            {rating < 2 ? (
              <AiOutlineStar size="2rem" onClick={() => setRating(2)} />
            ) : (
              <AiFillStar size="2rem" onClick={() => setRating(2)} />
            )}
            {rating < 3 ? (
              <AiOutlineStar size="2rem" onClick={() => setRating(3)} />
            ) : (
              <AiFillStar size="2rem" onClick={() => setRating(3)} />
            )}
            {rating < 4 ? (
              <AiOutlineStar size="2rem" onClick={() => setRating(4)} />
            ) : (
              <AiFillStar size="2rem" onClick={() => setRating(4)} />
            )}
            {rating < 5 ? (
              <AiOutlineStar size="2rem" onClick={() => setRating(5)} />
            ) : (
              <AiFillStar size="2rem" onClick={() => setRating(5)} />
            )}
          </div>
        </UI.WriteWrap>
        {/* <AppButton content="사진 첨부하기" radius="0.5rem" onClick={() => {}} /> */}
        <AppButton content="리뷰 등록하기" radius="0.5rem" onClick={() => {}} />
      </UI.Wrap>
    </>
  )
}
