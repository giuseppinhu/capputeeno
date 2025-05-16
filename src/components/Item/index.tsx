import Image from "next/image";

import mockup from "../../../public/mockup.png";
import * as S from "./style";

const Item = () => (
  <div>
    <S.Card>
      <Image className="border-radius" src={mockup} width={250} height={300} alt="Image do produto" />
      <div className="card-body">
        <S.Title>Nome do Produto</S.Title>
        <hr />
        <S.Price>RS 78,00</S.Price>
      </div>
    </S.Card>
  </div>
)

export default Item
