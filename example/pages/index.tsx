import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SinpeReact from 'sinpe-react'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SinpeReact 
      btnClass={""} customerOptions={{email:"masca", name:"vale"}} vendorOptions={{phone:"caca", thankyouPage:"doe"}}  modalClass="" />
    </div>
  )
}

export default Home
