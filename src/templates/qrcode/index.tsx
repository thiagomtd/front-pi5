import QrCode from '../../components/QrCode'
import * as S from './styles'

const QrCodeTemplate = () => {
  return (
    <S.ProductWrapper>
      <QrCode value='any'/>
    </S.ProductWrapper>
  )
}

export default QrCodeTemplate
