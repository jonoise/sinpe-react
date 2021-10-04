import React from 'react'
import globalStyles from '../../../styles/Global.module.css'

const MobilePayment = () => {
  return (
    <>
      <h3>Instrucciones</h3>
      <ol>
        <li>
          <span className={globalStyles.bold}>1.</span> Al hacer click en
          "Finalizar compra" una ventana se abrirá para efectuar el pago por
          mensaje de texto.
        </li>
        <li>
          <span className={globalStyles.bold}>2.</span> Acepte la ventana y
          envíe el mensaje.
        </li>
        <li>
          <span className={globalStyles.bold}>3.</span>
          {`Espere a que SINPE le responda de vuelta con un número de comprobante.
            (Puede tardar hasta 5 minutos.)`}
        </li>
        <li>
          <span className={globalStyles.bold}>4. Vuelva a esta ventana</span> y
          agregue el número de comprobante en el espacio de abajo.
        </li>
        <li>
          <span className={globalStyles.bold}>5.</span> Felicidades su compra se
          ha realizado con éxito.
        </li>
      </ol>
    </>
  )
}
export default MobilePayment
