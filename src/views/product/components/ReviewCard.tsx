import * as UI from './ReviewCard.styled'

interface Review {
  img: null | string
  option: string
  form: string
  userId: string
  title: string
  content: string
  likeCnt: number
  date: string
}

interface Props {
  item: Review
}

export default function ReviewCard({ item }: Props) {
  const { img, option, form, userId, title, content, likeCnt, date } = item
  return (
    <UI.Wrap>
      {img && <img src="" />}
      <div>
        <strong>{title}</strong>
        <p>{content}</p>
      </div>
    </UI.Wrap>
  )
}
