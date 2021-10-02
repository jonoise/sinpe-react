import type { NextPage } from 'next'
import SinpeReact from 'sinpe-react'

const Home: NextPage = () => {
  return (
      <SinpeReact customer={{email: "email@company.com"}} vendor={{phone:"84019933", callbackUrl:"/whoosh:whoosh"}} />
  )
}

export default Home
