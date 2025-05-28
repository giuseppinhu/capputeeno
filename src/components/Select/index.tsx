import { SelectStyle } from './style'

type Props = {
  valueSelect: string
  setValueSelect: (value: string) => void
}

const Select = ({ valueSelect, setValueSelect }: Props) => {
  return (
    <SelectStyle
      value={valueSelect}
      onChange={(e) => setValueSelect(e.target.value)}
    >
      <option value="" selected defaultValue="order">
        Organize por
      </option>
      <option value="new">Novidades</option>
      <option value="pricemin">Preço: Menor - Maior</option>
      <option value="pricemax">Preço: Maior - Menor</option>
      <option value="moresale">Mais Vendidos</option>
    </SelectStyle>
  )
}

export default Select
