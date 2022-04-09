import { useRouter } from 'next/router'
import QrCode from '../../components/QrCode'
import * as S from './styles'

const QrCodeTemplate = () => {
  const router = useRouter()
  return (
    <S.ProductWrapper>
      <QrCode/>
    </S.ProductWrapper>
  )
}

export default QrCodeTemplate
