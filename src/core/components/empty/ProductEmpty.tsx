import { Player } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components'
import animationData from '../../../designs/assets/lottieEmptyProduct.json'
import { getColor, getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export default function ProductEmpty() {
  return (
    <Wrap>
      <Player loop autoplay src={animationData} style={{ height: '300px', width: '300px' }} />
      <p>해당 조건에 상품이 없습니다</p>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  height: 100%;
  transform: translateY(-10%);
  p {
    ${getTypo({ fontSize: '1.3rem' })}
    ${getColor('BLACK')}
    margin-top: 1rem;
  }
`
