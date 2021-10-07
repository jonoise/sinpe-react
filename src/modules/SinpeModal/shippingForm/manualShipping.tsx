import React from 'react'
import { useEffect } from 'react'
import useOptions from '../../../hooks/useOptions'
import checkIsMobile from '../../../logic/isMobile'
import styles from './Form.module.css'

const ManualShipping = () => {
  const options = useOptions()

  const handleManualShipping = (e: React.ChangeEvent<any>) => {
    if (e.target.checked) {
      options.setManualAddress(true)
      return
    }
    options.setManualAddress(false)
    return
  }

  const isMobile = checkIsMobile()

  useEffect(() => {
    if (isMobile) {
      options.setManualAddress(false)
      return
    } else {
      options.setManualAddress(true)
    }
  }, [isMobile])

  return (
    <>
      {isMobile ? (
        <div className={`${styles.inlineInputs}`}>
          <input
            id="manualShipping"
            type="checkbox"
            onClick={(e) => handleManualShipping(e)}
            className={styles.checkbox}
          />
          <label htmlFor="manualShipping">
            Coordinar entrega por Whatsapp.
          </label>
        </div>
      ) : null}
    </>
  )
}

export default ManualShipping
