import { useEffect, useState } from "react"

import Item from "../Item"
import { Container } from "./style"


interface Product {
  id: number
  name: string
  description: string
  category: string
  image_url: string
  price: number
  sales: number
}

type GraphQL = {
  data: {
    allProducts: Product[]
  }
}


const ListItem = () => {

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
    fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query:`
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
      .then(res => res.json())
      .then((result: GraphQL) => {
        setProducts(result.data.allProducts)
      })
      .catch(error => {
        console.error('Erro:', error)
      })
}, [])

console.log(products)

  return (
   <Container>
    {products.map(p => <Item key={p.id} category={p.category} description={p.description} image_url={p.image_url} name={p.name} price={p.price}/>)}
   </Container>
  )
}

export default ListItem
