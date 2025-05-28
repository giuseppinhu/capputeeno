import Image from 'next/image'

import * as S from './style'
import { formatPrices } from '@/utils'

type Props = {
  name: string
  description: string
  category: string
  image_url: string
  price: number
}

const Item = ({ name, image_url, price }: Props) => {
  return (
    <div>
      <S.Card>
        <Image
          className="border-radius"
          src={image_url}
          width={250}
          height={300}
          alt="Image do produto"
        />
        <div className="card-body">
          <S.Title>{name}</S.Title>
          <hr />
          <S.Price>{formatPrices(price)}</S.Price>
        </div>
      </S.Card>
    </div>
  )
}

export default Item
