import { Category, Pagination } from "./style"

export type Props = {
  category: 'pagination' | 'category'
  title: string
  active?: boolean
}

const Button = ({ category, title, active }: Props) => {
  return category == 'category' ? <Category active={active}>{title}</Category> : <Pagination active={active}>{title}</Pagination>
}

export default Button
