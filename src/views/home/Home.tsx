import * as UI from './Home.styled'
import { AiOutlineMenu } from 'react-icons/ai'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import { Product } from './Home.interface'
import { useRequestProductListQuery } from './Home.query'
import { CategoryList } from './Home.constant'
import AppSearch from '../../core/components/AppSearch'
import AppCategoryBar from '../../core/components/AppCategoryBar'

export default function Home() {
  const { data: productList, isLoading } = useRequestProductListQuery()

  return (
    <UI.Wrap>
      <UI.SearchWrap>
        <AppSearch />
        <AiOutlineMenu size="1.5rem" style={{ marginLeft: '1rem' }} />
      </UI.SearchWrap>
      <AppCategoryBar list={CategoryList} />
      <UI.ProductWrap>
        {productList && productList.map((product: Product, idx) => <ProductCardVertical key={idx} product={product} />)}
      </UI.ProductWrap>
    </UI.Wrap>
  )
}
