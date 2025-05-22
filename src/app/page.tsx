'use client'

import { useState } from 'react'

import Header from '@/components/Header'
import Button from '@/components/Button'
import Select from '@/components/Select'
import ListItem from '@/components/ListItem'

import styles from './page.module.css'


const Home = () => {
  const [currentPage, setCurrentPage] = useState(0)
  
  const returnPage = () => {
    return currentPage <= 0 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
  }

 const nextPage = () => {
    return currentPage >= 4 ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 1)
  }

  return (
  <>
    <Header />
    <main className="container">
      <Button category="category" title="Todos as Categorias" active />
      <Button category="category" title="Canecas" /> 
      <Button category="category" title="Camisas" />
      <Select />
      <div className={styles.pagination}>
        <Button category="pagination" title="1" active onClick={() => setCurrentPage(0)}/>
        <Button category="pagination" title="2" onClick={() => setCurrentPage(1)}/>
        <Button category="pagination" title="3" onClick={() => setCurrentPage(2)}/>
        <Button category="pagination" title="4" onClick={() => setCurrentPage(3)}/>
        <Button category="pagination" title="5" onClick={() => setCurrentPage(4)}/>
        <Button category="pagination" title="<" onClick={() => returnPage()}/>
        <Button category="pagination" title=">" onClick={() => nextPage()}/>
      </div>
      <ListItem currentPage={currentPage}/>
      <div className={styles.pagination}>
        <Button category="pagination" title="1" active />
        <Button category="pagination" title="2" />
        <Button category="pagination" title="3" />
        <Button category="pagination" title="4" />
        <Button category="pagination" title="5" />
        <Button category="pagination" title="<" />
        <Button category="pagination" title=">" />
      </div>
    </main>
  </>
)
}

export default Home
