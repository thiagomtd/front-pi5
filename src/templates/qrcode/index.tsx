import QrCode from '../../components/QrCode'
import * as S from './styles'

export type QrCodeTemplateParams = {
  payloadPix: string
}

const QrCodeTemplate = ({payloadPix}: QrCodeTemplateParams) => {
  return (
    <S.ProductWrapper>
      <QrCode value={payloadPix}/>
    </S.ProductWrapper>
  )
}

export default QrCodeTemplate
