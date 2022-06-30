import { useNavigate } from 'react-router-dom'
import * as UI from './Home.styled'
import { AiOutlineMenu } from 'react-icons/ai'
import { ProductCardVertical } from '../../core/components/card/ProductCard'

import { useRequestProductListQuery } from './Home.query'
import { CategoryList } from './Home.constant'
import AppSearch from '../../core/components/AppSearch'
import AppCategoryBar from '../../core/components/AppCategoryBar'
import { startTransition } from 'react'
import { Product } from '../../core/types/product'

export default function Home() {
  const { data: productList, isLoading } = useRequestProductListQuery()

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/${id}`))

  return (
    <UI.Wrap>
      <UI.SearchWrap>
        <AppSearch />
        <AiOutlineMenu size="1.5rem" style={{ marginLeft: '1rem' }} />
      </UI.SearchWrap>
      <AppCategoryBar list={CategoryList} />
      <UI.ProductWrap>
        {productList &&
          productList.map((product: Product) => (
            <ProductCardVertical onClick={goToDetailPage(product.id)} key={product.id} product={product} />
          ))}
      </UI.ProductWrap>
    </UI.Wrap>
  )
}
