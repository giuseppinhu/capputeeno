import Image from 'next/image'

import * as S from './style'
import { formatPrices } from '@/utils'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
  name: string
  image_url: string
  price: number
}

const Item = ({ name, image_url, price, id }: Props) => {
  const router = useRouter()

  const productDetail = () => {
    router.push(`/produtos/${id}`)
  }

  return (
    <div>
      <S.Card onClick={productDetail}>
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
