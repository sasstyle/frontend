import { CartProductList } from '../../api/cart/cart.interface'
import { useGetCartListQuery, useUpdateCartListMutation } from '../../api/cart/cart.query'
import AppHeader from '../../core/components/AppHeader'
import * as UI from './Cart.styled'
import ProductCard from './ProductCard/ProductCard'

export default function Cart() {
  const { data, isLoading, isError, refetch } = useGetCartListQuery()

  return (
    <>
      <AppHeader title="장바구니" isBack />
      {data && data?.products.length > 0 ? (
        <UI.Wrap>
          {data?.products.map((product: CartProductList) => (
            <ProductCard
              key={product.cartDetailId}
              initCnt={product.count}
              price={product.price}
              brandName={product.brandName}
              productName={product.name}
              imgUrl={product.profileUrl}
              productId={product.productId}
              cartDetailId={product.cartDetailId}
              refetchList={refetch}
            />
          ))}
        </UI.Wrap>
      ) : (
        <UI.EmptyWrap>장바구니가 비어있습니다.</UI.EmptyWrap>
      )}
    </>
  )
}
