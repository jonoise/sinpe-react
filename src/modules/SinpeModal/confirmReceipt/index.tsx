import React from 'react'
import styles from './Receipt.module.css'
import { useForm } from 'react-hook-form'
import checkIsMobile from '../../../logic/isMobile'

const ConfirmReceipt = () => {
  const isMobile = checkIsMobile()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: object) => {
    console.log(data)
  }

  return (
    <>
      {isMobile ? (
        <form className={styles.receiptForm} onSubmit={handleSubmit(onSubmit)}>
          <small
            style={{ fontStyle: 'italic', fontSize: '10px', color: '#7e7e7e' }}>
            *Tras realizar el pago, ingrese el número de comprobante 👇
          </small>
          <div className={styles.inlineInputs}>
            <input
              {...register('receipt', {
                required: 'Ingresa el número de comprobante'
              })}
              type="text"
              placeholder="Comprobante SINPE"
              className={`${styles.formControl} ${styles.mr5}`}
            />
            <input
              type="submit"
              value="Confirmar Orden"
              className={styles.receiptBtn}
            />
          </div>
          {errors.receipt && (
            <div className={styles.inputError}>
              <p>{errors.receipt.message}</p>
            </div>
          )}
        </form>
      ) : null}
    </>
  )
}

export default ConfirmReceipt
