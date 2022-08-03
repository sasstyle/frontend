import { startTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetLikeListQuery } from '../../api/product/product.query'
import AppHeader from '../../core/components/AppHeader'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import { Product } from '../../core/types/product'
import * as UI from './Wish.styled'

export default function Wish() {
  const { data: wishList, isLoading } = useGetLikeListQuery()

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/detail/${id}`))

  console.log(wishList)
  return (
    <>
      <AppHeader title="좋아요 누른 상품" isBack />
      <UI.Wrap>
        <UI.ProductWrap>
          {wishList && wishList.length < 1 && <ProductEmpty />}
          {wishList &&
            wishList.map((product: Product) => (
              <ProductCardVertical
                onClick={goToDetailPage(product.productId)}
                key={product.productId}
                product={product}
                categoryId={product.categoryId}
              />
            ))}
        </UI.ProductWrap>
      </UI.Wrap>
    </>
  )
}
