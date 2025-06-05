'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import { useCart } from '@/context/cart'
import { formatPrices } from '@/utils'

import * as S from './styles'

type PageProps = {
  params: {
    id: string
  }
}

const Details = ({ params }: PageProps) => {
  const [product, setProduct] = useState<Product | null>(null)

  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query {
            Product(id: "${params.id}") {
                id
                name
                description
                category
                image_url
                price_in_cents
              }
          }
        `
        })
      })

      const json = await res.json()
      setProduct(json.data.Product)
    }
    fetchProduct()
  }, [params.id])

  if (!product) {
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    )
  }

  const addItemCart = () => {
    addToCart({
      id: params.id,
      name: product.name,
      description: product.description,
      image_url: product.image_url,
      price: product.price_in_cents
    })
    redirect('/cart')
  }

  return (
    <>
      <Header />
      <div className="container">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="button-return">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
                stroke="#617480"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 13L7.5 10.5L10 8"
                stroke="#617480"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5"
                stroke="#617480"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Voltar
          </span>
        </Link>
        <S.Container>
          <Image
            alt="Image do Produto"
            src={product.image_url}
            width={640}
            height={580}
            style={{
              borderRadius: '4px',
              display: 'block',
              marginRight: '32px'
            }}
          />
          <div className="content">
            {product.category == 'mugs' ? (
              <S.Category>Caneca</S.Category>
            ) : (
              <S.Category>Camiseta</S.Category>
            )}
            <S.Title>{product.name}</S.Title>
            <S.Price>{formatPrices(product.price_in_cents)}</S.Price>
            <S.Quote>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </S.Quote>
            <S.SubTitle>DESCRIÇÃO</S.SubTitle>
            <S.Description>{product.description}</S.Description>

            <S.ButtonCart onClick={() => addItemCart()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7"
                  stroke="#F5F5FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
                  stroke="#F5F5FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
                  stroke="#F5F5FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ADICIONAR CARRINHO
            </S.ButtonCart>
          </div>
        </S.Container>
      </div>
    </>
  )
}

export default Details
