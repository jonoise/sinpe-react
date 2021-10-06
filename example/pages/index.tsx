import axios from 'axios'
import type { NextPage } from 'next'
import SinpeReact from 'sinpe-react'
declare var process : {
  env: {
    SINPE_API_KEY: string,
    SINPE_PUBLIC_KEY: string
  }
}

const Home: NextPage = () => {
  const post_to_my_api = (order:any) => {
    axios.post("my_api_url")
  }

  return (
    <SinpeReact
    credentials={{api_key:"asd", public_key:"bcd"}}
    vendorPhoneNumber="84019933" 
    order={{totalAmount: 5000}}
    />
  )

}

export default Home
