import React from 'react'
import checkIsMobile from '../../../logic/isMobile'
import styles from './Form.module.css'

const SubmitButton = () => {
  const isMobile = checkIsMobile()
  return (
    <>
      {isMobile ? (
        <input
          name="pay-btn"
          type="submit"
          value="Realizar Pago"
          className={styles.btn}
        />
      ) : (
        <input
          name="email-btn"
          type="submit"
          value="Enviar Email"
          className={styles.btn}
        />
      )}
    </>
  )
}

export default SubmitButton
