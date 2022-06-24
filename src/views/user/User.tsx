import NavList from './components/NavList'
import BeforeUserTitle from './components/BeforeUserTitle'
import * as UI from './User.styled'
import { AfterUserTitle } from './components/AfterUserTitle'

export default function User() {
  const isUser = true
  const DummyUser = {
    name: '홍길동',
    gender: 'MAN',
    email: 'sasstyle@sasstyle.com',
    phoneNumber: '010-1234-5678',
    address: '서울시 어딘가...',
    type: 'seller',
    sellerName: 'BrandName',
    buyerGrade: 'VIP',
  }

  return (
    <UI.Wrap>
      {!isUser && <BeforeUserTitle />}
      {isUser && <AfterUserTitle user={DummyUser} />}
      <NavList />
    </UI.Wrap>
  )
}
