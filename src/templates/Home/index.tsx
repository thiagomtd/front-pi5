import * as S from './styles'

import ItemCard from '../../components/ItemCard'

const HomeTemplate = () => {
  return (
    <S.HomeWrapper>
      <ItemCard
        imageSrc='https://logosmarcas.net/wp-content/uploads/2021/12/MMs-Logo.png'
        price={5}
        title='M&M'
        weight={25}
      />
      <ItemCard
        imageSrc='https://dori.com.br/wp-content/uploads/2019/07/logo-DORI.png'
        price={5}
        title='Amendoim'
        weight={25}
      />
    </S.HomeWrapper>
  )
}

export default HomeTemplate
