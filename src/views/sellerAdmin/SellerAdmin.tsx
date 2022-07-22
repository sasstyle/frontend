import { useRef } from 'react'
import * as UI from './SellerAdmin.styled'
import { GoPlus } from 'react-icons/go'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import AppHeader from '../../core/components/AppHeader'
import { uploadFiles } from '../../core/util/uploadFile'
import AppButton from '../../core/components/AppButton'

export default function SellerAdmin() {
  const fileInput = useRef<HTMLInputElement>(null)
  const { value: price, onSetValue: setPrice } = useInput('')
  const { value: name, onSetValue: setName } = useInput('')
  const { value: stockQuantity, onSetValue: setStockQuantity } = useInput('')

  const uploadFile = async () => {
    const files = fileInput.current && fileInput.current.files
    console.log(files)

    // const res = await uploadFiles(files[0])

    // console.log(res)
  }

  const postProduct = async () => {
    const imgData = await uploadFile()
    console.log(imgData)
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
            <input onChange={uploadFile} id="imageUrl" type="file" multiple ref={fileInput} />
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
        <UI.FileSelectWrap>
          <strong>추가 이미지 선택 ( 최대 5개까지 가능합니다 )</strong>
          <UI.FileSelectBox>
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
            <input onChange={uploadFile} id="imageUrl" type="file" multiple ref={fileInput} />
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
      </UI.FileSelectGroup>
      <AppButton content="상품 등록" onClick={uploadFile} radius="0.3rem" />
    </UI.Wrap>
  )
}
