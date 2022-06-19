import styled from 'styled-components'
import { FiHome, FiSearch, FiTag, FiUser, FiHeart } from 'react-icons/fi'
import { getFlex, getMediaScreen } from '../../designs/util/display'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <NavWrap>
      <IconWrap>
        <FiHome />
        <Link to="/">홈</Link>
      </IconWrap>
      <IconWrap>
        <FiSearch />
        <Link to="">스토어</Link>
      </IconWrap>
      <IconWrap>
        <FiTag />
        <Link to="">브랜드</Link>
      </IconWrap>
      <IconWrap>
        <FiHeart />
        <Link to="">찜</Link>
      </IconWrap>
      <IconWrap>
        <FiUser />
        <Link to="/user">마이페이지</Link>
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
  ${getMediaScreen()}
`

const IconWrap = styled.div`
  ${getFlex({ dir: 'column' })}
  a {
    margin-top: 0.4rem;
    font-size: 0.6rem;
    text-decoration: none;
    color: black;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
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
