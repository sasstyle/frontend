import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useCheckIsUserQuery } from '../../api/auth/auth.query'
import { Res_PostFitting } from '../../api/fitting/fitting.interface'
import { useGetAllFittingQuery, usePostFittingMutation } from '../../api/fitting/fitting.query'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import SimpleModal from '../../core/components/modal/SimpleModal'
import { useModal } from '../../core/hooks/useModal'
import { sliceLetter } from '../../designs/util/helpder'
import * as UI from './Product.styled'
import ReviewCard from './components/ReviewCard'

export default function Product() {
  const { isModal, setIsModal } = useModal()
  const [modalProps, setModalProps] = useState({ content: '', btn: '', trigger: () => {} })

  const params = useParams()
  const navigate = useNavigate()

  const { data: product, isLoading } = useGetProductDetailQuery({ id: Number(params.id) })
  const { data: reviewList } = useGetReviewQuery({ productId: Number(params.id) })
  const { data: userData } = useCheckIsUserQuery()
  const { data } = useGetAllFittingQuery()

  const [postFitting, { isLoading: fittingLoading, isSuccess, isError }] = usePostFittingMutation()

  const onPostFitting = () => {
    const fittingParams: any = {
      desc: '',
      productId: Number(params.id),
      clothUrl: product?.images[0],
      profileUrl: userData?.profileUrl,
    }
    if (!fittingParams.profileUrl) {
      setModalProps({ content: '로그인을 해주세요', btn: '로그인 하러가기', trigger: () => navigate('/login') })
      setIsModal(true)
      return
    }
    postFitting(fittingParams)
      .unwrap()
      .then((res) => console.log(res))
      .catch((er) => console.log(er))
  }

  return (
    <>
      <SimpleModal
        isModal={isModal}
        icon={'error'}
        content={modalProps.content}
        btnText={modalProps.btn}
        trigger={setIsModal}
        btnTrigger={modalProps.trigger}
      />
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
          content="👕 피팅해보기 👕"
          onClick={onPostFitting}
          background="white"
          color="black"
          radius="0.5rem"
          style={{ marginTop: '1.2rem', border: '1px solid black' }}
        />
        <AppButton
          content="🙌 다른 사람 피팅 사진 둘러보기 🙌"
          onClick={() => navigate(`/product/fitting/${params.id}`)}
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
