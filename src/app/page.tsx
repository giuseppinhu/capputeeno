'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import Button from '@/components/Button'
import Select from '@/components/Select'
import ListItem from '@/components/ListItem'

import styles from './page.module.css'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  const [currentPage, setCurrentPage] = useState(0)
  const [categoryState, setCategory] = useState('all')
  const [valueSelect, setValueSelect] = useState('')

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
  
  const returnPage = () => {
    return currentPage <= 0
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    return currentPage >= 4
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1)
  }

  const actuallyPage = (page: number) => {
    setCurrentPage(page)
  }

  const paginationButton = (page: number) => {
    return currentPage == page ? true : false
  }

  const categoryButton = (category: string) => {
    return categoryState == category ? true : false
  }

  return (
    <>
      <Header />
      <main className="container">
        <Button
          type="category"
          title="Todos as Categorias"
          active={categoryButton('all')}
          onClick={() => setCategory('all')}
        />
        <Button
          type="category"
          title="Canecas"
          active={categoryButton('mugs')}
          onClick={() => setCategory('mugs')}
        />
        <Button
          type="category"
          title="Camisas"
          active={categoryButton('t-shirts')}
          onClick={() => setCategory('t-shirts')}
        />
        <Select valueSelect={valueSelect} setValueSelect={setValueSelect} />
        <div className={styles.pagination}>
          <Button
            type="pagination"
            title="1"
            active={paginationButton(0)}
            onClick={() => actuallyPage(0)}
          />
          <Button
            type="pagination"
            title="2"
            active={paginationButton(1)}
            onClick={() => actuallyPage(1)}
          />
          <Button
            type="pagination"
            title="3"
            active={paginationButton(2)}
            onClick={() => actuallyPage(2)}
          />
          <Button
            type="pagination"
            title="4"
            active={paginationButton(3)}
            onClick={() => actuallyPage(3)}
          />
          <Button
            type="pagination"
            title="5"
            active={paginationButton(4)}
            onClick={() => actuallyPage(4)}
          />
          <Button type="pagination" title="<" onClick={() => returnPage()} />
          <Button type="pagination" title=">" onClick={() => nextPage()} />
        </div>
        <ListItem
          category={categoryState}
          currentPage={currentPage}
          option={valueSelect}
          products={products}
        />
      </main>
    </>
  )
}

export default Home
