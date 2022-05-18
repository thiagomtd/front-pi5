import { useState } from 'react'
import * as S from './styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import router from 'next/router'
import HomeTemplate from '../../templates/Home'

type SelectCardProps = {
  name: string
  imageSrc: string
  price: string
  weight: string
}

const SelectCard = ({ price, imageSrc, weight, name }: SelectCardProps) => {
  // realizar chamada na api para pegar a quantidade maxima do produto
  const maxQuantity = 15
  const [quantity, quantitySet] = useState(1)
  const newPrice = +price * quantity
  const newWeight = +weight * quantity

  return (
    <S.SelectWrapper>
      <S.SelectImage src={imageSrc} />
      <S.SelectDivider />
      <S.SelectDivForm>
        <S.SelectDisplayQuantity>Peso: {newWeight}g</S.SelectDisplayQuantity>
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
              if (quantity !== 1) {
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
          <S.SelectButtonCancel onClick={() => router.push('/')}>
            Cancelar
          </S.SelectButtonCancel>
          <S.SelectButtonConfirm
            onClick={() => {
              console.log({
                Nome: `${name}`,
                Valor: `${newPrice}`,
                Quantidade: `${quantity}`,
                Peso: `${newWeight}g`,
              })
              router.push(
                `/qrcode/?name=${name}&price=${newPrice}&weight=${newWeight}&quantity=${quantity}`
              )
            }}>
            Confirmar
          </S.SelectButtonConfirm>
        </S.SelectDisplayQuantitybutton>
      </S.SelectDivForm>
    </S.SelectWrapper>
  )
}

export default SelectCard
