import { Category } from "./style"

export type Props = {
  category: 'pagination' | 'category'
  title: string
  active?: boolean
}

const Button = ({ category, title, active }: Props) => {
  return category == 'category' ? <Category active={active}>{title}</Category> : <button>{title}</button>
}

export default Button
