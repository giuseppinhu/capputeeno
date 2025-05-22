import { Category, Pagination } from './style'

export type Props = {
  category: 'pagination' | 'category'
  title: string
  active?: boolean
  onClick?: () => void
}

const Button = ({ category, title, active, onClick }: Props) => {
  return category == 'category' ? (
    <Category onClick={onClick} active={active}>{title}</Category>
  ) : (
    <Pagination onClick={onClick} active={active}>{title}</Pagination>
  )
}

export default Button
