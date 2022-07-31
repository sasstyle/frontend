import { useState } from 'react'
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
          <textarea placeholder="텍스트 리뷰"></textarea>
        </UI.WriteWrap>
        <AppButton content="사진 첨부하기" radius="0.5rem" onClick={() => {}} />
      </UI.Wrap>
    </>
  )
}
