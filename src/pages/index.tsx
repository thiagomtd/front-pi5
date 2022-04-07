import type { NextPage } from 'next'
import HomeTemplate from '../templates/Home/index'
import SelectPage from '../templates/SelectPage/index'

const Home: NextPage = () => {
  return (
    <div>
      <HomeTemplate />
      {/* <SelectPage /> */}
    </div>
  )
}

export default Home
