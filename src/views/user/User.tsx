import { BsBell, BsCart2 } from 'react-icons/bs'
import NavList from './components/NavList'
import BeforeUserTitle from './components/BeforeUserTitle'
import * as UI from './User.styled'
import { AfterUserTitle } from './components/AfterUserTitle'
import AppHeader from '../../core/components/AppHeader'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function User() {
  const isUser = true
  const DummyUser = {
    name: '홍길동',
    gender: 'MAN',
    email: 'sasstyle@sasstyle.com',
    phoneNumber: '010-1234-5678',
    address: '서울시 어딘가...',
    type: 'ADMIN',
    sellerName: 'BrandName',
    buyerGrade: 'VIP',
  }

  return (
    <>
      <AppHeader title="마이페이지" icon={HeaderIcon()} />
      <UI.Wrap>
        {!isUser && <BeforeUserTitle />}
        {isUser && <AfterUserTitle user={DummyUser} />}
        <NavList />
      </UI.Wrap>
    </>
  )
}
