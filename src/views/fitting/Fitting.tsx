import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetFittingDetailQuery, useGetProductFittingQuery } from '../../api/fitting/fitting.query'
import AppHeader from '../../core/components/AppHeader'
import SimpleModal from '../../core/components/modal/SimpleModal'
import { useModal } from '../../core/hooks/useModal'
import * as UI from './Fitting.styled'

export default function Fitting() {
  const [currId, setCurrId] = useState(0)

  const { isModal, setIsModal } = useModal()
  const params = useParams()
  const { data, isLoading } = useGetProductFittingQuery({ productId: Number(params.id) })

  return (
    <>
      <AppHeader title="피팅 둘러보기" isBack />
      <UI.Wrap>
        <UI.ImgList>
          {data?.map((item) => (
            <img
              key={item.id}
              src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'}
              alt="fitting img"
              onClick={() => {
                setCurrId(item.id)
                setIsModal(true)
              }}
            />
          ))}
        </UI.ImgList>
      </UI.Wrap>
      <SimpleModal
        isModal={isModal}
        content={<FittingModal fittingId={currId} />}
        btnText="닫기"
        trigger={() => setIsModal(false)}
        btnTrigger={() => setIsModal(false)}
        height={'25rem'}
      />
    </>
  )
}

export function FittingModal({ fittingId }: { fittingId: number }) {
  const { data, isLoading } = useGetFittingDetailQuery({ id: fittingId })
  return (
    <UI.ModalImg
      src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'}
      alt="fitting img"
    />
  )
}
