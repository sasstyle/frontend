import AppHeader from '../../core/components/AppHeader'
import * as UI from './Cart.styled'
import ProductCard from './ProductCard/ProductCard'

export default function Cart() {
  return (
    <>
      <AppHeader title="장바구니" isBack />
      <UI.Wrap>
        <ProductCard price={52330} brandName={'브랜딍름'} productName={'어쩌구셔츠'} />
        <ProductCard price={52330} brandName={'브랜딍름'} productName={'어쩌구셔츠'} />
        <ProductCard price={52330} brandName={'브랜딍름'} productName={'어쩌구셔츠'} />
        <ProductCard price={52330} brandName={'브랜딍름'} productName={'어쩌구셔츠'} />
      </UI.Wrap>
    </>
  )
}
