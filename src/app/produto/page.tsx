'use client'

import Image from 'next/image'

import mockup from '../../../public/mockup.png'

import Header from '@/components/Header'
import * as S from './styles'

const Details = () => (
  <>
    <Header />
    <div className="container">
      <S.Return>
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
      </S.Return>
      <S.Container>
        <Image
          alt="image fds"
          src={mockup}
          width={640}
          style={{ borderRadius: '4px', display: 'block', marginRight: '32px' }}
        />
        <div className='content'>
          <span>Caneca</span>
          <S.Title>Caneca de cerâmica rústica</S.Title>
          <S.Price>R$ 40,00</S.Price>

          <S.Quote>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </S.Quote>

          <S.SubTitle>DESCRIÇÃO</S.SubTitle>
          <S.Description>
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </S.Description>

          <S.ButtonCart>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
                stroke="#F5F5FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
                stroke="#F5F5FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            ADICIONAR CARRINHO
          </S.ButtonCart>
        </div>
      </S.Container>
    </div>
  </>
)

export default Details
