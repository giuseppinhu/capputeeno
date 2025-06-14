import { redirect } from 'next/navigation'

import { useCart } from '@/context/cart'

import { sairaOne } from '@/variables/fonts'
import * as S from './style'

const Header = () => {
  const { cartItems } = useCart()

  return (
    <S.HeaderStyle>
      <div className="container">
        <div className="brand">
          <span className={sairaOne.className}>capputeeno</span>
        </div>
        <S.Search>
          <input type="text" placeholder="Procurando algo em especifico?" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.059"
              cy="11.0586"
              r="7.06194"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0034 20.0033L16.0518 16.0517"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Search>
        <div className="bag" onClick={() => redirect('/cart')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
              stroke="#737380"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{cartItems.length}</span>
        </div>
      </div>
    </S.HeaderStyle>
  )
}

export default Header
