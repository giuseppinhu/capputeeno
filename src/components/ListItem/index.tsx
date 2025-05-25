import { useEffect, useState } from 'react'

import Item from '../Item'
import { Container } from './style'
import { convertToTimeStamp } from '@/utils'

type Props = {
  currentPage: number
  category: string
  option: string
}

const ListItem = ({ currentPage, category, option}: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const allPages = []
  const filtredPage = []
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
  
  
  const filtro = products.filter(p => 
    category === 'mugs' ? p.category === 'mugs' : p.category === 't-shirts'
  )
    
  for (let i = 0; i < 5; i++) {
    const start = i * productsPerPage
    const end = start + productsPerPage

    allPages[i] = products.slice(start, end)
    filtredPage[i] = filtro.slice(start, end)
  }


  const selectOptions = (option: string) => {
    switch (option) {
      case 'new': 
        console.log('morango')
        break
      case 'pricemin':
        products.sort((a,b) => a.price_in_cents - b.price_in_cents)
        break
      case 'pricemax':
        const teste1 = products.sort((a,b) =>  b.price_in_cents - a.price_in_cents)
          break
      case 'moresale':
        products.sort((a,b) =>  b.sales - a.sales)
        break
      default:
        break
    }
  }

  selectOptions(option)

  return (
    <Container>
      {category === 'all' ? (
        allPages[currentPage].length === 0 ? (
          <p>Essa página está vazia.</p>
        ) : (
          allPages[currentPage].map((product) => (
            <Item
              key={product.id}
              name={product.name}
              image_url={product.image_url}
              price={product.price_in_cents}
              description={product.description}
              category={product.category}
            />
          ))
        )
      ) : (
        filtredPage[currentPage].length === 0 ? (
          <p>Essa página está vazia.</p>
        ) : (
          filtredPage[currentPage].map((p) => (
            <Item
              key={p.id}
              name={p.name}
              image_url={p.image_url}
              price={p.price_in_cents}
              description={p.description}
              category={p.category}
            />
          ))
        )
      )}
    </Container>
  )
}

export default ListItem
