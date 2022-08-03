import Rate from '../../../core/components/Rate'
import * as UI from './ReviewCard.styled'

interface Review {
  img: null | string
  userId: string
  content: string
  date: string
  rate: number
}

interface Props {
  item: Review
}

export default function ReviewCard({ item }: Props) {
  const { img, userId, content, date, rate } = item
  return (
    <UI.Wrap>
      <div>{img && <img src={img} />}</div>
      <div>
        <UI.WriterInfo>
          <strong>writer</strong>
          <Rate rate={rate} />
        </UI.WriterInfo>

        <p>{content}</p>
      </div>
    </UI.Wrap>
  )
}
