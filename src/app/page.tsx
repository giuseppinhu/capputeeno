'use client'

import { useState } from 'react'

import Header from '@/components/Header'
import Button from '@/components/Button'
import Select from '@/components/Select'
import ListItem from '@/components/ListItem'

import styles from './page.module.css'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isActive, setisActive] = useState(false)

  const returnPage = () => {
    return currentPage <= 0 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
  }

 const nextPage = () => {
    return currentPage >= 4 ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 1)
 }

 const actuallyPage = (id: number, page: number) => {
    if(id == page) {
      setCurrentPage(page)
      setisActive(true)
    }
 }

 return (
  <>
    <Header />
    <main className="container">
      <Button category="category" title="Todos as Categorias" active={false} />
      <Button category="category" title="Canecas" active={false}/>
      <Button category="category" title="Camisas" active={false}/>
      <Select />
      <div className={styles.pagination}>
        <Button id={0} category="pagination" title="1" active={isActive} onClick={() => actuallyPage(0, 0)}/>
        <Button id={1} category="pagination" title="2" active={isActive} onClick={() => actuallyPage(1, 1)}/>
        <Button id={2} category="pagination" title="3" active={isActive} onClick={() => actuallyPage(2, 2)}/>
        <Button id={3} category="pagination" title="4" active={isActive} onClick={() => actuallyPage(3, 3)}/>
        <Button id={4} category="pagination" title="5" active={isActive} onClick={() => actuallyPage(4, 4)}/>
        <Button category="pagination" title="<" onClick={() => returnPage()}/>
        <Button category="pagination" title=">" onClick={() => nextPage()}/>
      </div>
      <ListItem currentPage={currentPage}/>
      <div className={styles.pagination}>
        <Button category="pagination" title="1" active={isActive} onClick={() => setCurrentPage(0)}/>
        <Button category="pagination" title="2" active={isActive} onClick={() => setCurrentPage(1)}/>
        <Button category="pagination" title="3" active={isActive} onClick={() => setCurrentPage(2)}/>
        <Button category="pagination" title="4" active={isActive} onClick={() => setCurrentPage(3)}/>
        <Button category="pagination" title="5" active={isActive} onClick={() => setCurrentPage(4)}/>
        <Button category="pagination" title="<" active={isActive} onClick={() => returnPage()}/>
        <Button category="pagination" title=">" active={isActive} onClick={() => nextPage()}/>
      </div>
    </main>
  </>
)
}

export default Home
