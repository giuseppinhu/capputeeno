import { useEffect, useState } from 'react'

import Item from '../Item'
import { Container } from './style'

type Props = {
  currentPage: number
}

const ListItem = ({ currentPage }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const allPages = []
  const productsPerPage = 12


  useEffect(() => {
    fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
            query {
              allProducts {
                  id,
                  name,
                  description,
                  category,
                  image_url,
                  price_in_cents,
                  sales,
                  created_at
            }
          }
        `
      })
    })
      .then((res) => res.json())
      .then((result: GraphQL) => {
        setProducts(result.data.allProducts)
      })
      .catch((error) => {
        console.error('Erro:', error)
      })
  }, [])

  for (let i = 0; i < 5; i++) {
    const start = i * productsPerPage
    const end = start + productsPerPage

    allPages[i] = products.slice(start, end)
  }

  return (
    <Container>
      {allPages[currentPage].map((product) => (
        <Item
          key={product.id}
          name={product.name}
          image_url={product.image_url}
          price={product.price_in_cents}
          description={product.description}
          category={product.category}
        />
      ))}
    </Container>
  )
}

export default ListItem
