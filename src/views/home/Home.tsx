import { startTransition, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as UI from './Home.styled'
import { AiOutlineMenu } from 'react-icons/ai'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import AppSearch from '../../core/components/AppSearch'
import { Product } from '../../core/types/product'
import { useGetProductQuery } from '../../api/product/product.query'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import Category from './components/Category'

export default function Home() {
  const [currPage, setCurrPage] = useState(0)
  const [categoryId, setCategoryId] = useState(183)

  const { data: productList, isLoading } = useGetProductQuery({ page: currPage, categoryId })

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/${id}`))

  return (
    <UI.Wrap>
      <UI.SearchWrap>
        <AppSearch />
        <AiOutlineMenu size="1.5rem" style={{ marginLeft: '1rem' }} />
      </UI.SearchWrap>
      <Category onSetCategory={(id: number) => setCategoryId(id)} />
      <UI.ProductWrap>
        {productList && productList.content.length < 1 && <ProductEmpty />}
        {productList &&
          productList.content.map((product: Product) => (
            <ProductCardVertical
              onClick={goToDetailPage(product.productId)}
              key={product.productId}
              product={product}
            />
          ))}
      </UI.ProductWrap>
    </UI.Wrap>
  )
}
