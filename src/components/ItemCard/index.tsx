import Link from 'next/link'
import * as S from './styles'

type ItemCardProps = {
  title: string
  imageSrc: string
  price: number
  weight: number
}

const ItemCard = ({ imageSrc, price, title, weight }: ItemCardProps) => {
  return (
    //<Link href={`produto?title=${title}&price=${}`} >
    <S.ItemWrapper onClick={() => {}}>
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.ItemImage src={imageSrc} />
      <S.ItemValue>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </S.ItemValue>
      <S.ItemWeight>{weight}g</S.ItemWeight>
    </S.ItemWrapper>
    //</Link>
  )
}

export default ItemCard
