import * as S from './styles'
import QRCode from 'react-qr-code'

type QrCodeParams = {
  value: string
}

const QrCode = ({value}: QrCodeParams) => {
  return (
    <S.SelectWrapper>
      <S.QrCodeTitle>Escaneie o QrCode para realizar o pagamento</S.QrCodeTitle>
      <QRCode value={value} />
    </S.SelectWrapper>
  )
}

export default QrCode
