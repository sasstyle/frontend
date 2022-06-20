import { useParams } from 'react-router-dom'
import { useRequestProductDetailQuery } from './Porudct.query'

export default function Product() {
  const params = useParams()

  const { data: product, isLoading } = useRequestProductDetailQuery(Number(params.id))

  return <>product</>
}
