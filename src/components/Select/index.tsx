import { SelectStyle } from './style'

const Select = () =>
<SelectStyle>
    <option value="order" disabled selected>Organize por</option>
    <option value="new">Novidades</option>
    <option value="pricemin">Preço: Menor - Maior</option>
    <option value="pricemax">Preço: Maior - Menor</option>
    <option value="moresale">Mais Vendidos</option>
</SelectStyle>

export default Select
