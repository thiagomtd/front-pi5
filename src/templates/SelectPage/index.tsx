import * as S from './styles'

import SelectCard from '../../components/SelectCard'

const SelectPage = () => {
  return (
    <S.SelectWrapper>
      <SelectCard
        imageSrc='https://logosmarcas.net/wp-content/uploads/2021/12/MMs-Logo.png'
        price={5}
        weight={25}
      />
    </S.SelectWrapper>
  )
}

export default SelectPage
