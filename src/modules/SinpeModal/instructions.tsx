import React from 'react'
import globalStyles from '../../../styles/Global.module.css'
import checkMobile from '../../logic/isMobile'

const Instructions = () => {
  const isMobile = checkMobile()
  return (
    <>
      <div className={globalStyles.instructionsContainer}>
        {isMobile ? <MobileInstructions /> : <DeskTopInstructions />}
      </div>
    </>
  )
}

export default Instructions

const DeskTopInstructions = () => {
  return (
    <>
      <div className={globalStyles.warningContainer}>
        <h4 className={globalStyles.smallH4}>Importante</h4>
        <p className={globalStyles.smallP}>
          Las transacciones por SINPE Móvil deben realizarse por medio de un
          teléfono celular. Puede volver a realizar la compra desde su celular u
          optar por recibir un e-mail que contiene un link a esta página, la
          cuál deberá acceder desde su celular.
        </p>
      </div>
      <h3>Instrucciones</h3>
      <ol>
        <li>
          <span className={globalStyles.bold}>1.</span> Haga click en "Enviar
          Email".
        </li>
        <li>
          <span className={globalStyles.bold}>2.</span> Abra el email desde su
          celular.
        </li>
        <li>
          <span className={globalStyles.bold}>3.</span> Haga click en el link a
          esta página.
        </li>
        <li>
          <span className={globalStyles.bold}>4.</span> Siga las instrucciones
          ahí detalladas y realice la compra
        </li>
      </ol>
    </>
  )
}

const MobileInstructions = () => {
  return (
    <>
      <h3>Instrucciones</h3>
      <ol>
        <li>
          <span className={globalStyles.bold}>1.</span> Elija su entidad
          bancaria.
        </li>
        <li>
          <span className={globalStyles.bold}>2.</span> Al hacer click en
          "Realizar pago" una ventana se abrirá para efectuar el pago por
          mensaje de texto.
        </li>
        <li>
          <span className={globalStyles.bold}>3.</span> Acepte la ventana y
          envíe el mensaje.
        </li>
        <li>
          <span className={globalStyles.bold}>4. </span>
          Espere a que SINPE le responda de vuelta con un número de comprobante.
          (Puede tardar hasta 5 minutos.)
        </li>
        <li>
          <span className={globalStyles.bold}>5. Vuelva a esta ventana</span> y
          agregue el número de comprobante en el espacio de abajo.
        </li>
        <li>
          <span className={globalStyles.bold}>6.</span> Confirme la orden.{' '}
          <span className={globalStyles.alert}>Este paso es indispensable</span>
        </li>
        <li>
          <span className={globalStyles.bold}>7.</span> Felicidades su orden se
          completó. Se lo dejaremos saber apenas la confirmemos. 🙂
        </li>
      </ol>
    </>
  )
}
