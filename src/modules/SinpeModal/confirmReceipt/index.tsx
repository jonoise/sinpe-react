import React from 'react'
import styles from './Receipt.module.css'
import { useForm } from 'react-hook-form'
import checkIsMobile from '../../../logic/isMobile'
import useProperConf from '../../../hooks/useProperConf'
import usePaymentMade from '../../../hooks/usePaymentMade'
import toast from 'light-toast'

const ConfirmReceipt = () => {
  const isMobile = checkIsMobile()
  const properlyConfigured = useProperConf((state) => state.isProperConfig)
  const paymentMade = usePaymentMade((state) => state.isPaymentMade)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: object) => {
    if (!paymentMade) {
      toast.fail('Realice el pago primero.')
      return null
    }
    console.log(data)
    return null
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
              disabled={!properlyConfigured}
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
