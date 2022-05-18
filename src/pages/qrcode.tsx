import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import ProductPage from '../templates/Product/index'
import QrCodeTemplate from '../templates/qrcode'

export default function Product(resp: any) {

  console.log(resp)

  return <QrCodeTemplate />
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const {query} = context


  const resp = axios.post('http://127.0.0.1:5000/orders', {
    Nome: query?.name,
    valor: query?.price,
    quantidade: query?.quantity,
    peso: query?.weight
}).then((resp) => resp.data)



  return {
    props: {
      data: resp
    }
  }
}
