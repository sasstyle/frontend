import styled from 'styled-components'
import { IoShirtOutline, IoStorefrontOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { getFlex, getSafeWidth } from '../../../designs/util/display'
import { getColor } from '../../../designs/util/atom'
import { Link } from 'react-router-dom'

interface User {
  name: string
  gender: string
  email: string
  phoneNumber: string
  address: string
  type: string // 'seller' | 'buyer'
  sellerName?: string
  buyerGrade?: string
}

interface Props {
  user: User
}

export function AfterUserTitle({ user }: Props) {
  return (
    <>
      <UserBasicInfo>
        <h1>{user.name}님 안녕하세요 !</h1>
        <p>{user.email}</p>
        <IoChevronForwardOutline size="1.4rem" />
      </UserBasicInfo>
      {user.type === 'seller' && (
        <UserTypeCard>
          <div>
            <div>
              <IoStorefrontOutline size="1.5rem" stroke="white" />
            </div>
            <strong>{user.sellerName}</strong>
          </div>
          <Link to="/seller">
            상품 등록하러 가기 <IoChevronForwardOutline size="1.4rem" />
          </Link>
        </UserTypeCard>
      )}
      {user.type === 'buyer' && (
        <UserTypeCard>
          <div>
            <IoShirtOutline size="1.5rem" stroke="white" />
          </div>
          <strong>{user.buyerGrade}</strong>
        </UserTypeCard>
      )}
    </>
  )
}

const UserBasicInfo = styled.div`
  position: relative;
  ${getFlex({ dir: 'column', ai: 'flex-start' })}
  width: 100%;
  height: 4rem;
  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.3rem;
    ${getColor('GREY_4')}
  }
  svg {
    position: absolute;
    top: 25%;
    right: 0;
    ${getColor('GREY_2')};
  }
`

const UserTypeCard = styled.div`
  ${getSafeWidth()}
  height: 8rem;
  ${getFlex({ dir: 'column', ai: 'flex-start', js: 'space-between' })}
  border-radius: 0.4rem;
  padding: 1.5rem 1rem 0 1rem;
  margin-top: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  div {
    ${getFlex()}
  }
  div > div {
    ${getFlex()}
    width: 2.6rem;
    height: 2.6rem;
    background-color: skyblue;
    border-radius: 50%;
    margin-right: 1rem;
  }
  strong {
    font-size: 1.4rem;
  }
  a {
    width: 100%;
    height: 3.4rem;
    ${getFlex({ js: 'space-between' })}
    ${getColor('GREY_5')}
    font-size: 0.9rem;
    text-decoration: none;
    svg {
      transform: translateY(-8%);
      ${getColor('GREY_2')};
    }
  }
`
