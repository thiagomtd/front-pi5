import { useRouter } from 'next/router'
import SelectCard from '../../components/SelectCard'
import * as S from './styles'

const ProductTemplate = () => {
  const router = useRouter()
  const { price, name, imgUrl, weight } = router.query
  return (
    <S.ProductWrapper>
      <SelectCard imageSrc={imgUrl as string} price={price as string} weight={weight as string} name={name as string} />
    </S.ProductWrapper>
  )
}

export default ProductTemplate
