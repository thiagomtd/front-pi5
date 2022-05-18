import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { QrCodePix } from 'qrcode-pix'
import ProductPage from '../templates/Product/index'
import QrCodeTemplate, { QrCodeTemplateParams } from '../templates/qrcode'

type ProductParams = {
  data: QrCodeTemplateParams
}

export default function Product({data}: ProductParams) {

  return <QrCodeTemplate payloadPix={data.payloadPix} />
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const { query } = context

  const qrCodePix = QrCodePix({
    version: '01',
    key: '19e9eed9-d57b-43a4-80c3-9e8f3a945c9f', //or any PIX key
    name: 'THIAGO DE OLIVEIRA SANTOS',
    city: 'FUNDÃO - ES',
    transactionId: String(Math.random()*100), //max 25 characters
    message: `Pague o seu ${query?.name}`,
    cep: '29185000',
    value: Number(query.price),
  })




  return {
    props: {
      data: {
        payloadPix: qrCodePix.payload(),
      }
    }
  }
}
