import { startTransition, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as UI from './Home.styled'
import { AiOutlineMenu } from 'react-icons/ai'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import AppSearch from '../../core/components/AppSearch'
import { Product } from '../../core/types/product'
import { useGetProductQuery, useLazyGetProductQuery } from '../../api/product/product.query'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import Category from './components/Category'
import AppButton from '../../core/components/AppButton'
import AppModal from '../../core/components/modal/AppModal'
import { Dimmed } from '../../App.styled'
import { deleteToken, isUser } from '../../core/util/user'
import ProductLoading from '../../core/components/ProductLoading'

export default function Home() {
  const [currPage, setCurrPage] = useState(0)
  const [categoryId, setCategoryId] = useState(1)
  const [isMenu, setIsMenu] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isItem, setIsItem] = useState(true)

  const { data: initialProduct, isLoading, refetch } = useGetProductQuery({ page: 0, categoryId })
  const [trigger, result, lastPromiseInfo] = useLazyGetProductQuery()

  const [productList, setProductList] = useState<any>([])

  useEffect(() => {
    if (productList.length > 10) return
    !isLoading && initialProduct && setProductList(initialProduct.content)
  }, [isLoading, productList, initialProduct])

  useEffect(() => {
    refetch()
  }, [categoryId, refetch])

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && isItem && productList) {
      trigger({ page: currPage + 1, categoryId }).then((res: any) => {
        setProductList(productList.concat(res.data.content))
        setCurrPage(currPage + 1)
        if (res.data.content.length < 10) setIsItem(false)
      })
    }
  }

  const resetState = () => {
    setIsModal(false)
    setIsMenu(false)
  }

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/detail/${id}`))

  return (
    <>
      {isModal && (
        <>
          <AppModal type="small">
            <UI.ModalContent>
              <p>로그아웃 하시겠습니까 ?</p>
              <div>
                <button
                  onClick={() => {
                    deleteToken()
                    navigate('/login')
                  }}
                >
                  로그아웃
                </button>
                <button onClick={resetState}>돌아가기</button>
              </div>
            </UI.ModalContent>
          </AppModal>
          <Dimmed onClick={resetState} />
        </>
      )}
      <UI.Wrap>
        {isMenu && (
          <UI.Dropdown>
            {isUser() ? (
              <AppButton
                content="로그아웃"
                onClick={() => {
                  setIsModal(true)
                  setIsMenu(false)
                  setIsItem(true)
                }}
                radius="1rem"
              />
            ) : (
              <AppButton content="로그인" onClick={() => navigate('/login')} radius="1rem" />
            )}
          </UI.Dropdown>
        )}
        <UI.SearchWrap>
          <AppSearch />
          <AiOutlineMenu
            onClick={() => setIsMenu(!isMenu)}
            size="1.5rem"
            style={{ marginLeft: '1rem', cursor: 'pointer' }}
          />
        </UI.SearchWrap>
        <Category
          onSetCategory={(id: number) => {
            setCategoryId(id)
            setCurrPage(0)
            setProductList([])
            setIsItem(true)
          }}
        />
        <UI.ProductWrap>
          {isLoading && <ProductLoading />}
          {!isLoading && productList.length < 1 && <ProductEmpty />}
          {productList &&
            productList.map((product: Product) => (
              <ProductCardVertical
                onClick={goToDetailPage(product.productId)}
                key={product.productId}
                product={product}
                categoryId={categoryId}
              />
            ))}
        </UI.ProductWrap>
      </UI.Wrap>
    </>
  )
}
