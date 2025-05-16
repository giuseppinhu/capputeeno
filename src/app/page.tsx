'use client'

import Header from '@/components/Header'
import Button from '@/components/Button'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <Button category="category" title="Todos as Categorias" />
      <Button category="category" title="Canecas" />
      <Button category="category" title="Camisas" />
    </div>
  </>
)

export default Home
