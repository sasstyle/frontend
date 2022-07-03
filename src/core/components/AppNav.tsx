import styled from 'styled-components'
import { FiHome, FiSearch, FiTag, FiUser, FiHeart } from 'react-icons/fi'
import { getFlex, getMaxMediaScreen } from '../../designs/util/display'
import { useNavigate } from 'react-router-dom'
import { startTransition, useState } from 'react'
import { getCurrentNav } from '../util'

export default function AppNav() {
  const [current, setCurrent] = useState(getCurrentNav())

  const getColor = (name: string) => (current === name ? 'black' : 'lightgrey')

  const navigate = useNavigate()
  const goTo = (location: string, name: string) => () =>
    startTransition(() => {
      navigate(location)
      setCurrent(name)
    })

  return (
    <NavWrap>
      <IconWrap onClick={goTo('/', 'home')}>
        <FiHome stroke={getColor('home')} />
        <span style={{ color: getColor('home') }}>홈</span>
      </IconWrap>
      <IconWrap onClick={goTo('/', 'store')}>
        <FiSearch color={getColor('store')} />
        <span style={{ color: getColor('store') }}>스토어</span>
      </IconWrap>
      <IconWrap onClick={goTo('/', 'brand')}>
        <FiTag color={getColor('brand')} />
        <span style={{ color: getColor('brand') }}>브랜드</span>
      </IconWrap>
      <IconWrap onClick={goTo('/', 'like')}>
        <FiHeart color={getColor('like')} />
        <span style={{ color: getColor('like') }}>찜</span>
      </IconWrap>
      <IconWrap onClick={goTo('/user', 'user')}>
        <FiUser color={getColor('user')} />
        <span style={{ color: getColor('user') }}>마이페이지</span>
      </IconWrap>
      <Box />
    </NavWrap>
  )
}

const NavWrap = styled.nav`
  ${getFlex({ ai: 'flex-start', js: 'space-between' })}
  width: 100vw;
  height: 6rem;
  position: fixed;
  bottom: 0;
  gap: 1rem;
  padding: 0.8rem 2rem 0;
  background-color: #ffffff;
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  ${getMaxMediaScreen({ maxWidth: '528px' })}
`

const IconWrap = styled.div`
  ${getFlex({ dir: 'column' })}
  span {
    margin-top: 0.4rem;
    font-size: 0.6rem;
    text-decoration: none;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`

const Box = styled.div`
  position: absolute;
  right: 50%;
  bottom: 0.8rem;
  transform: translateX(50%);
  width: 8rem;
  height: 0.2rem;
  background-color: black;
  border-radius: 2rem;
`
