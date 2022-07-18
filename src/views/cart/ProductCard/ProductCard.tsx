import * as UI from './ProductCard.styled'
import { IoClose, IoCheckmarkSharp } from 'react-icons/io5'
import { useState } from 'react'

export interface ProductCardProps {
  brandName: string
  productName: string
  price: number
}

export default function ProductCard({ brandName, productName, price }: ProductCardProps) {
  const [cnt, setCnt] = useState(1)
  return (
    <UI.ProductWrap>
      <UI.BrandTitle>
        <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
        <strong>{brandName}</strong>
      </UI.BrandTitle>
      <UI.Hr />
      <div>
        <UI.BrandItem>
          <UI.Check type={'checkbox'} id="item1" />
          <label htmlFor={'item1'}>
            <IoCheckmarkSharp size={'1rem'} />
          </label>
          <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
          <strong>{productName}</strong>
          <IoClose size={'1.2rem'} fill={'#949494'} />
        </UI.BrandItem>
        <UI.TotalPrice>
          <UI.Counter>
            <button onClick={cnt > 1 ? () => setCnt(cnt - 1) : () => {}}>-</button>
            <span>{cnt}</span>
            <button onClick={() => setCnt(cnt + 1)}>+</button>
          </UI.Counter>
          <span>{price.toLocaleString()}원</span>
        </UI.TotalPrice>
      </div>
    </UI.ProductWrap>
  )
}
