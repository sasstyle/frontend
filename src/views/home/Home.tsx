import * as UI from './Home.styled'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import { Product } from './Home.interface'
import { useRequestProductListQuery } from './Home.query'

export default function Home() {
  const { data: productList, isLoading } = useRequestProductListQuery()

  return (
    <UI.ProductWrap>
      {productList && productList.map((product: Product) => <ProductCardVertical product={product} />)}
    </UI.ProductWrap>
  )
}
