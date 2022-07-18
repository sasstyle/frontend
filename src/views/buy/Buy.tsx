import AppHeader from '../../core/components/AppHeader'
import * as UI from './Buy.styled'

export default function Buy() {
  return (
    <>
      <AppHeader title="결제" isBack />
      <UI.Wrap>
        <UI.BuyInfo>
          <strong>총 2개의 상품</strong>
          <ul>
            <li>
              <UI.BrandTitle>
                <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
                <strong>{'brandName'}</strong>
              </UI.BrandTitle>
              <UI.Hr />
              <UI.BrandItem>
                <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
                <strong>{'productName'}</strong>
              </UI.BrandItem>
            </li>
            <li>
              <UI.BrandTitle>
                <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
                <strong>{'brandName'}</strong>
              </UI.BrandTitle>
              <UI.Hr />
              <UI.BrandItem>
                <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} />
                <strong>{'productName'}</strong>
              </UI.BrandItem>
            </li>
          </ul>
        </UI.BuyInfo>
        <UI.UserInfo>
          <strong>이땡땡</strong>
          <p>010-1234-5678</p>
          <p>고객 주소</p>
        </UI.UserInfo>
        <UI.PayInfo>
          <strong>총 결제 금액</strong>
          <span>86,700원</span>
        </UI.PayInfo>
      </UI.Wrap>
    </>
  )
}
