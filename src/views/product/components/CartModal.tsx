import styled from 'styled-components'
import { Res_Product } from '../../../api/product/product.interface'
import { selectProduct, usePostAddCartMutation } from '../../../api/product/product.query'
import AppButton from '../../../core/components/AppButton'
import AppCounter from '../../../core/components/AppCounter'
import { useAppSelector } from '../../../core/hooks/redux'
import useCounter from '../../../core/hooks/useCounter'
import { getBgColor, getColor } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export default function CartModal() {
  const productId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)
  const productApi = useAppSelector(selectProduct)
  const product: any = productApi[`getProductDetail({"id":${productId}})`]?.data

  const { cnt, setCnt } = useCounter(1)

  const [addCart, { isLoading, error }] = usePostAddCartMutation()

  const onAddCart = () => {
    const values = {
      productId: Number(productId),
      count: cnt,
    }
    addCart(values)
      .unwrap()
      .then(() => {
        console.log('success')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Wrap>
      <ProductWrap>
        <strong>{product?.name}</strong>
        <div>
          <AppCounter cnt={cnt} setCnt={setCnt} />
          <strong>{product?.price.toLocaleString()}원</strong>
        </div>
      </ProductWrap>
      <PriceWrap>
        <span>{cnt}개 상품 금액</span>
        <strong>{(product?.price * cnt).toLocaleString()}원</strong>
      </PriceWrap>
      <BtnWrap>
        <AppButton content="바로구매" onClick={() => {}} />
        <AppButton content="장바구니" onClick={onAddCart} />
      </BtnWrap>
    </Wrap>
  )
}

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'space-between', ai: 'flex-start' })}
  width: 100%;
  height: 100%;
`

export const ProductWrap = styled.div`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  ${getBgColor('GREY_1')}
  strong {
    font-size: 1.1rem;
  }
  & > div {
    margin-top: 0.5rem;
    ${getFlex({ js: 'space-between' })}
  }
`

export const BtnWrap = styled.div`
  ${getFlex()}
  width: 100%;
  gap: 1rem;
  button {
    border-radius: 2rem;
    width: 100%;
    &:first-child {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`

export const PriceWrap = styled.div`
  width: 100%;
  ${getFlex({ js: 'space-between' })}
  span {
    ${getColor('GREY_4')}
    font-size: 0.8rem;
  }
  strong {
    font-size: 1.5rem;
  }
`
