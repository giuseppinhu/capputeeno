'use client'

import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header'
import * as S from './styles'

import { useCart } from '@/context/cart'
import { formatPrices, totalPrice } from '@/utils'

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useCart()
  const priceProducts = formatPrices(totalPrice(cartItems))
  const totalPurchase = formatPrices(totalPrice(cartItems) + 4000)

  return (
    <>
      <Header />
      <S.Container className="container">
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
                strokeWidth="1.5"
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
        <S.Title>SEU CARRINHO</S.Title>
        <span>
          Total ({cartItems.length} produtos) <b>{priceProducts}</b>
        </span>
        {cartItems.map((item) => (
          <S.Product key={item.id}>
            <Image
              src={item.image_url}
              width={255}
              height={216}
              alt={`Imagem ${item.name}`}
              style={{ objectFit: 'contain', borderRadius: '8px 0  0 8px' }}
            />
            <div className="content">
              <h4>{item.name}</h4>
              <span onClick={() => removeFromCart(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1378 21H7.85782C6.81082 21 5.94082 20.192 5.86282 19.147L4.96582 7H18.9998L18.1328 19.142C18.0578 20.189 17.1868 21 16.1378 21V21Z"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V17"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L15.987 4.298C15.694 3.517 14.948 3 14.114 3H9.886C9.052 3 8.306 3.517 8.013 4.298L7 7"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4298 11L14.9998 17"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.57016 11L9.00016 17"
                    stroke="#DE3838"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>{item.description}</p>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <b>{formatPrices(item.price)}</b>
            </div>
          </S.Product>
        ))}
        <S.Aside>
          <h3>RESUMO DO PEDIDO</h3>
          <S.Infos>
            Subtotal do produtos: <span>{priceProducts}</span>
          </S.Infos>
          <S.Infos>
            Entrega: <span>R$ 40,00</span>
          </S.Infos>
          <hr />
          <S.Infos className="bold">
            Total: <span>{totalPurchase}</span>
          </S.Infos>
          <S.AsideButton>Finalizar a Compra</S.AsideButton>
          <ul>
            <li>
              <S.AsideLink href="">Ajuda</S.AsideLink>
            </li>
            <li>
              <S.AsideLink href="">Reembolso</S.AsideLink>
            </li>
            <li>
              <S.AsideLink href="">Entregas e frete</S.AsideLink>
            </li>
            <li>
              <S.AsideLink href="">Trocas e devoluções</S.AsideLink>
            </li>
          </ul>
        </S.Aside>
      </S.Container>
    </>
  )
}

export default Cart
