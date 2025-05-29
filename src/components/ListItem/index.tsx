import { useMemo } from 'react'

import Item from '../Item'
import { Container } from './style'

type Props = {
  currentPage: number
  category: string
  option: string
  products: Product[]
}

const ListItem = ({ currentPage, category, option, products}: Props) => {
  const productsPerPage = 12

  const isRecent = (createdAt: string) => {
    const now = Date.now()
    const monthInMs = 30 * 24 * 60 * 60 * 1000
    return now - new Date(createdAt).getTime() <= monthInMs
  }

  const filteredByCategory = useMemo(() => {
    if (category === 'all') return products
    return products.filter((p) => p.category === category)
  }, [products, category])

  const sortedProducts = useMemo(() => {
    let result = [...filteredByCategory]

    switch (option) {
      case 'new':
        return result.filter((p) => isRecent(p.created_at))
      case 'pricemin':
        return result.sort((a, b) => a.price_in_cents - b.price_in_cents)
      case 'pricemax':
        return result.sort((a, b) => b.price_in_cents - a.price_in_cents)
      case 'moresale':
        return result.sort((a, b) => b.sales - a.sales)
      default:
        return result
    }
  }, [filteredByCategory, option])

  const paginatedProducts = useMemo(() => {
    const pages = []
    for (
      let i = 0;
      i < Math.ceil(sortedProducts.length / productsPerPage);
      i++
    ) {
      const start = i * productsPerPage
      const end = start + productsPerPage
      pages.push(sortedProducts.slice(start, end))
    }
    return pages
  }, [sortedProducts])

  const currentProducts = paginatedProducts[currentPage] || []

  return (
    <Container>
      {currentProducts.length === 0 ? (
        <p>Essa página está vazia.</p>
      ) : (
        currentProducts.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price={product.price_in_cents}
            description={product.description}
            category={product.category}
          />
        ))
      )}
    </Container>
  )
}

export default ListItem
