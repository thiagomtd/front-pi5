import * as S from './styles'
import QRCode from 'react-qr-code'

const QrCode = (context: any) => {
  console.log(context)
  return (
    <S.SelectWrapper>
      <S.QrCodeTitle>Escaneie o QrCode para realizar o pagamento</S.QrCodeTitle>
      <QRCode value='00020101021226880014BR.GOV.BCB.PIX2566qrcodes-pix.gerencianet.com.br/v2/bf264e36b6784162b5b2da73b4f519825204000053039865802BR5914GERENCIANET SA6010OURO PRETO62070503***6304DFB7' />
    </S.SelectWrapper>
  )
}

export default QrCode

//127.0.0.1:5000/orders

// export const getServerSideProps = async () => {
//   return {
//     props: { hello: 'oi' },
//   }
// }

export async function getServerSideProps(context: any) {
  return { props: { data: 'aqui' } }
}
