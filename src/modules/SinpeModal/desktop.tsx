import React from 'react'
import globalStyles from '../../../styles/Global.module.css'
import useOptions from '../../hooks/useOptions'
import Instructions from './instructions'
import ShippingForm from './shippingForm'

const DesktopPayment = () => {
  const manualAddress = useOptions((state: any) => state.manualAddress)
  console.log(manualAddress)
  return (
    <>
      <ShippingForm />
      <Instructions />
      <EmailVisualizer />
      <button
        className={`${globalStyles.btn} ${globalStyles.btnNeutral}`}
        onClick={() => console.log(window.location.href)}>
        {/* Este botón envía un email con un link a la página actual === checkout */}
        Enviar email
      </button>
    </>
  )
}
export default DesktopPayment

const EmailVisualizer = () => {
  const email = useOptions((state) => state.email)
  return (
    <>
      {email ? (
        <div
          className={`${globalStyles.emailVisualizer} ${globalStyles.successBG}`}>
          <p>Le enviaremos el email a: {email}</p>
        </div>
      ) : (
        <div
          className={`${globalStyles.emailVisualizer} ${globalStyles.errorBG}`}>
          <p>Por favor ingrese su email.</p>
        </div>
      )}
    </>
  )
}
