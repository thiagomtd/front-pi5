import { useState } from 'react'
import * as S from './styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

type SelectCardProps = {
  imageSrc: string
  price: number
  weight: number
}

const SelectCard = ({ imageSrc, price, weight }: SelectCardProps) => {
  // realizar chamada na api para pegar a quantidade maxima do produto
  const maxQuantity = 15
  const [quantity, quantitySet] = useState(0)
  const newPrice = price * quantity

  return (
    <S.SelectWrapper>
      <S.SelectImage src={imageSrc} />
      <S.SelectDivider />
      <S.SelectDivForm>
        <S.SelectDisplayQuantity>
          Quantidade: {quantity}
        </S.SelectDisplayQuantity>
        <S.SelectDisplayPrice>
          Valor: &nbsp;
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(newPrice)}
        </S.SelectDisplayPrice>
        <S.SelectDisplayQuantityDiv>
          <S.SelectButtonImMinus
            onClick={() => {
              if (quantity !== 0) {
                quantitySet(quantity - 1)
              }
            }}>
            <IoIosArrowDown />
          </S.SelectButtonImMinus>
          <S.SelectButtonImPlus
            onClick={() => {
              if (quantity !== maxQuantity) {
                quantitySet(quantity + 1)
              }
            }}>
            <IoIosArrowUp />
          </S.SelectButtonImPlus>
        </S.SelectDisplayQuantityDiv>
        <S.SelectDisplayQuantitybutton>
          <S.SelectButtonCancel>Cancelar</S.SelectButtonCancel>
          <S.SelectButtonConfirm
            onClick={() => {
              console.log({
                Valor: `${newPrice}`,
                Quantidade: `${quantity}`,
                Peso: `${weight * quantity}g`,
              })
            }}>
            Confirmar
          </S.SelectButtonConfirm>
        </S.SelectDisplayQuantitybutton>
      </S.SelectDivForm>
    </S.SelectWrapper>
  )
}

export default SelectCard
