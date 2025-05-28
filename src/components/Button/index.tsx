import { Category, Pagination } from './style'

export type Props = {
  type: 'pagination' | 'category'
  category?: 'mugs' | 't-shirts' | 'all'
  title: string
  active?: boolean
  onClick?: () => void
  id?: number
}

const Button = ({ category, title, active, onClick, type }: Props) => {
  return type == 'category' ? (
    <Category onClick={onClick} active={active} category={category}>
      {title}
    </Category>
  ) : (
    <Pagination onClick={onClick} active={active}>
      {title}
    </Pagination>
  )
}

export default Button
