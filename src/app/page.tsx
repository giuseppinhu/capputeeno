'use client'

import styles from './page.module.css'

import Header from '@/components/Header'
import Button from '@/components/Button'
import Select from '@/components/Select'
import ListItem from '@/components/ListItem'

const Home = () => (
  <>
    <Header />
    <main className="container">
      <Button category="category" title="Todos as Categorias" active/>
      <Button category="category" title="Canecas" />
      <Button category="category" title="Camisas" />
      <Select />
      <div className={styles.pagination}>
         <Button category="pagination" title="1" active/>
         <Button category="pagination" title="2"/>
         <Button category="pagination" title="3"/>
         <Button category="pagination" title="4"/>
         <Button category="pagination" title="5"/>
         <Button category="pagination" title="<"/>
         <Button category="pagination" title=">"/>
      </div>
      <ListItem />
      <div className={styles.pagination}>
         <Button category="pagination" title="1" active/>
         <Button category="pagination" title="2"/>
         <Button category="pagination" title="3"/>
         <Button category="pagination" title="4"/>
         <Button category="pagination" title="5"/>
         <Button category="pagination" title="<"/>
         <Button category="pagination" title=">"/>
      </div>
    </main>
  </>
)

export default Home
