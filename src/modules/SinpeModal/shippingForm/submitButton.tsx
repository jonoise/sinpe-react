import React from 'react'
import useProperConf from '../../../hooks/useProperConf'
import checkIsMobile from '../../../logic/isMobile'
import styles from './Form.module.css'

const SubmitButton = () => {
  const isMobile = checkIsMobile()
  const properlyConfigured = useProperConf((state) => state.isProperConfig)

  return (
    <>
      {isMobile ? (
        <input
          name="pay-btn"
          type="submit"
          value="Realizar Pago"
          className={styles.btn}
          disabled={!properlyConfigured}
        />
      ) : (
        <input
          name="email-btn"
          type="submit"
          value="Enviar Email"
          className={styles.btn}
          disabled={!properlyConfigured}
        />
      )}
    </>
  )
}

export default SubmitButton
