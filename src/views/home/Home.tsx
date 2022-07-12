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
import AppButton from '../../core/components/AppButton'
import AppModal from '../../core/components/modal/AppModal'
import { Dimmed } from '../../App.styled'
import { deleteToken, isUser } from '../../core/util/user'

export default function Home() {
  const [currPage, setCurrPage] = useState(0)
  const [categoryId, setCategoryId] = useState(183)
  const [isMenu, setIsMenu] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const { data: productList, isLoading } = useGetProductQuery({ page: currPage, categoryId })
  const resetState = () => {
    setIsModal(false)
    setIsMenu(false)
  }

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/${id}`))

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
    </>
  )
}
