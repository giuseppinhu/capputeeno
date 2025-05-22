interface Product {
  id: string
  name: string
  description: string
  category: string
  image_url: string
  price_in_cents: number
  sales: number
}

type GraphQL = {
  data: {
    allProducts: Product[]
  }
}
