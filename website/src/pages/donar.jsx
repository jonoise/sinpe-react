import Layout from '@theme/Layout'
import SinpeReact from 'sinpe-react'
import React from 'react'
import { useState } from 'react'

const donar = () => {
  const [donation, setDonation] = useState(5000)
  const handleChange = (e) => {
    setDonation(e.target.value)
  }
  return (
    <Layout>
      <div className="container padding--md">
        <span className="badge badge--success margin-bottom--md">Donar</span>
        <h1>Hola. 👋</h1>
        <p>
          Si estás considerando donar al proyecto, primero déjame agradecerte
          por el simple hecho de considerarlo. Para nosotros es una motivación
          muy grande recibir una donación, por más pequeña que sea.
        </p>
        <p>Usamos nuestro mismo software para efectuar la transferencia :).</p>
        <p>Elige el monto en colones.</p>
        <input type="number" name="amount" id="" onChange={handleChange} />
        <br />

        <SinpeReact
          vendorPhoneNumber="84019933"
          order={{ totalAmount: donation }}
          credentials={{ api_key: 'asd', public_key: 'bcd' }}
        />
      </div>
    </Layout>
  )
}

export default donar
