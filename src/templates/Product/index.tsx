import { useRouter } from 'next/router'
import SelectCard from '../../components/SelectCard'
import * as S from './styles'

const ProductTemplate = () => {
  const router = useRouter()
  const { price, name, imgUrl, weight } = router.query
  return (
    <S.ProductWrapper>
      <SelectCard imageSrc={imgUrl} price={price} weight={weight} name={name} />
    </S.ProductWrapper>
  )
}

export default ProductTemplate
