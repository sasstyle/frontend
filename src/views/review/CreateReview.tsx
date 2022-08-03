import { useRef, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { usePostReviewMutation } from '../../api/review/review.query'
import { selectReviewInfo } from '../../App.slice'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import { useAppSelector } from '../../core/hooks/redux'
import { uploadFiles } from '../../core/util/uploadFile'
import { FileSelectBox, FileSelectWrap } from '../sellerAdmin/SellerAdmin.styled'
import * as UI from './Review.styled'

export default function CreateReview() {
  const [rating, setRating] = useState(0)
  const [img, setImg] = useState()
  const textRef = useRef<any>(null)

  const navigate = useNavigate()

  const reviewInfo = useAppSelector(selectReviewInfo)

  const imgHandler = (e: any) => {
    const files = e.target.files
    setImg(files)
  }

  const [postReview] = usePostReviewMutation()

  const onPostReview = async () => {
    const params = {
      productId: reviewInfo.productId,
      content: textRef.current.value,
      images: img ? await uploadFiles(img) : null,
      rate: rating,
    }

    postReview(params)
      .unwrap()
      .then((res) => {
        window.alert('리뷰가 등록되었습니다.')
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <AppHeader title="리뷰 쓰기" isBack />
      <UI.Wrap>
        <UI.WriteWrap>
          <strong>리뷰를 작성해주세요.</strong>
          <textarea ref={textRef} placeholder="텍스트 리뷰"></textarea>
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
        <FileSelectWrap>
          <strong>이미지 선택 ( 최대 5개까지 가능합니다 )</strong>
          <FileSelectBox>
            <input type="file" onChange={imgHandler} multiple />
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
          </FileSelectBox>
        </FileSelectWrap>
        <AppButton content="리뷰 등록하기" radius="0.5rem" onClick={onPostReview} />
      </UI.Wrap>
    </>
  )
}
