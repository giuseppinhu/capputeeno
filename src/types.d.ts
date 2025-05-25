interface Product {
  id: string
  name: string
  description: string
  category: string
  image_url: string
  price_in_cents: number
  sales: number
  created_at: string
}

type GraphQL = {
  data: {
    allProducts: Product[]
  }
}
