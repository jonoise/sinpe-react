import styles from '../styles/Home.module.css'
import SinpeReact from 'sinpe-react'
export default function Home() {
  return (
    <div className={styles.container}>
      <SinpeReact
        customerOptions={{ name: 'Amilkar', email: 'amilkarms@gmail.com' }}
        vendorOptions={{ phone: '2346236' }}
      />
    </div>
  )
}
