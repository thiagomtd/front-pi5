import * as S from './styles'

const QrCode = () => {
  return (
    <S.SelectWrapper>
      <S.QrCodeTitle>Escaneie o QrCode para realizar o pagamento</S.QrCodeTitle>
      <S.QrCodeImage src='https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png' />
    </S.SelectWrapper>
  )
}

export default QrCode
