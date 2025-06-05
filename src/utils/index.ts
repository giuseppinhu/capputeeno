import { CartItem } from '@/context/cart'

export const formatPrices = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount / 100)
}

export const totalPrice = (item: CartItem[]) => {
  return item.reduce((acc, current) => {
    if (current.price) {
      return (acc += current.price)
    }
    return 0
  }, 0)
}
