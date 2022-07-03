import { useRef } from 'react'
import * as UI from './SellerAdmin.styled'
import { GoPlus } from 'react-icons/go'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import AppHeader from '../../core/components/AppHeader'
import { uploadFiles } from '../../core/util/uploadFile'
import AppTextArea from '../../core/components/AppTextArea'
import AppButton from '../../core/components/AppButton'

export default function SellerAdmin() {
  const fileInput = useRef<any>(null)
  const { value: price, onSetValue: setPrice } = useInput('')
  const { value: name, onSetValue: setName } = useInput('')
  const { value: stockQuantity, onSetValue: setStockQuantity } = useInput('')
  const { value: topDescription, onSetValue: setTopDescription } = useInput('')
  const { value: bottomDescription, onSetValue: setBottomDescription } = useInput('')

  const test = async () => {
    const files = fileInput.current && fileInput.current.files
    const res = await uploadFiles(files[0])
  }

  return (
    <UI.Wrap>
      <AppHeader title="상품 추가 페이지" />
      <UI.FormWrap>
        <AppInput label="가격" type="text" placeHolder="10,000" value={price} onSetValue={setPrice} />
        <AppInput label="상품 이름" placeHolder="검은 셔츠" value={name} onSetValue={setName} />
        <AppInput label="재고" placeHolder="100" value={stockQuantity} onSetValue={setStockQuantity} />
      </UI.FormWrap>
      <UI.FileSelectGroup>
        <UI.FileSelectWrap>
          <strong>기본 이미지 선택 ( 1개 )</strong>
          <UI.FileSelectBox>
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
            <input id="imageUrl" type="file" multiple ref={fileInput} />
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
        <UI.FileSelectWrap>
          <strong>추가 이미지 선택 ( 최대 3개까지 가능합니다 )</strong>
          <UI.FileSelectBox>
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
            <input id="imageUrl" type="file" multiple ref={fileInput} />
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
      </UI.FileSelectGroup>
      <UI.TextAreaGroup>
        <AppTextArea
          label="메인 소개글을 입력해주세요"
          placeHolder="dd"
          value={topDescription}
          onSetValue={setTopDescription}
        />
        <AppTextArea
          label="서브 소개글을 입력해주세요"
          placeHolder="dd"
          value={bottomDescription}
          onSetValue={setBottomDescription}
        />
      </UI.TextAreaGroup>
      <AppButton content="상품 등록" onClick={() => {}} radius="0.3rem" />
    </UI.Wrap>
  )
}
