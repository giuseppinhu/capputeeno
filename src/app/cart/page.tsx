'use client'

import Image from "next/image"
import Link from "next/link"

import Header from "@/components/Header"
import { Aside, AsideButton, Container, Infos, Product, Title, AsideLink } from "./styles"
import mockup from '../../../public/mockup.png'

const Cart = () => (
  <>
    <Header />
    <Container className="container">
         <Link href='/' style={{textDecoration: 'none'}}>
          <span className='button-return'>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 13L7.5 10.5L10 8"
              stroke="#617480"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5"
              stroke="#617480"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Voltar
          </span>
        </Link>
        <Title>SEU CARRINHO</Title>
        <span>Total (0 produtos) <b>R$00,00</b></span>
        <Product>
          <Image src={mockup} width={255} height={216} alt="Image do Produto" style={{objectFit: 'contain', borderRadius: '8px 0  0 8px'}}/> 
          <div className="content">
            <h4>Caneca de cerâmica rústica</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1378 21H7.85782C6.81082 21 5.94082 20.192 5.86282 19.147L4.96582 7H18.9998L18.1328 19.142C18.0578 20.189 17.1868 21 16.1378 21V21Z" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11V17" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 7H20" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 7L15.987 4.298C15.694 3.517 14.948 3 14.114 3H9.886C9.052 3 8.306 3.517 8.013 4.298L7 7" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.4298 11L14.9998 17" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.57016 11L9.00016 17" stroke="#DE3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <b>R$ 00,00</b>
          </div>
        </Product>
        <Aside>
            <h3>RESUMO DO PEDIDO</h3>
            <Infos>Subtotal do produtos: <span>R$00,00</span></Infos>
            <Infos>Entrega: <span>R$40,00</span></Infos>
            <hr />
            <Infos className="bold">Total: <span>R$00,00</span></Infos>
            <AsideButton>Finalizar a Compra</AsideButton>
            <ul>
              <li><AsideLink href="">Ajuda</AsideLink></li>
              <li><AsideLink href="">Reembolso</AsideLink></li>
              <li><AsideLink href="">Entregas e frete</AsideLink></li>
              <li><AsideLink href="">Trocas e devoluções</AsideLink></li>
            </ul>
        </Aside>
    </Container>
  </>
)

export default Cart