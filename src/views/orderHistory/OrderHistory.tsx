import { startTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOrderCartQuery } from '../../api/order/order.query'
import AppHeader from '../../core/components/AppHeader'
import * as UI from './OrderHistory.styled'

export default function OrderHistory() {
  const { data, isLoading, isError } = useGetOrderCartQuery()

  const navigate = useNavigate()
  const goToDetailPage = () => startTransition(() => navigate(`/review/create`))

  return (
    <>
      <AppHeader title="주문 내역" isBack></AppHeader>
      <UI.Wrap>
        {data?.data.map((order: any) => (
          <UI.HistoryWrap>
            <strong>{order.orderDate.slice(0, 10)}</strong>
            {order.orderProducts.map((product: any) => (
              <UI.Product>
                <img src={product.profileUrl} />
                <div>
                  <p>{product.productName}</p>
                  <div>
                    <strong>{product.price.toLocaleString()}원</strong>
                    <span>{product.count}</span>
                  </div>
                </div>
              </UI.Product>
            ))}
            <button onClick={goToDetailPage}>리뷰 작성</button>
          </UI.HistoryWrap>
        ))}
        {/* <strong>{data?.data.orderDate}</strong> */}
      </UI.Wrap>
    </>
  )
}