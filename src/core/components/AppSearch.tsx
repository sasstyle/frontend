import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

export default function AppSearch() {
  return (
    <Wrap>
      <SearchInput placeholder="아이템을 검색해보세요." />
      <FiSearch size="1rem" stroke="#262626" />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.4rem;
  background-color: #e9ecef;
  border-radius: 1.3rem;
  border: none;
  padding-left: 2.4rem;
  margin: 1rem 0;
`
