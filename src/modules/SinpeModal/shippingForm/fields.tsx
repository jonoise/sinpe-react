import React, { useEffect } from 'react'
import useOptions from '../../../hooks/useOptions'
import { useForm } from 'react-hook-form'
import checkIsMobile from '../../../logic/isMobile'
import usePostData from '../../../hooks/usePostData'
import styles from './Form.module.css'
import toast from 'light-toast'
import SubmitButton from './submitButton'

const RequiredFields = () => {
  const isMobile = checkIsMobile()
  const [res, makeRequest] = usePostData('send-switch-email')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const manualAddress = useOptions((state) => state.manualAddress)
  const inputAddressOptions = {
    required: 'Este espacio es requerido',
    disabled: manualAddress
  }

  useEffect(() => {
    if (res.loading) {
      toast.loading('Cargando')
    } else {
      toast.hide()
      if (res.error) {
        toast.fail('Algo falló, inténtalo de nuevo en unos minutos.')
      }
      if (res.data && res.data.redirectUrl) {
        window.location.href = `${res.data.redirectUrl}`
      }
    }
  }, [res])

  const onSubmit = (data: any) => {
    if (isMobile) {
      // SEND MESSAGE
      window.location.href = 'sms://+50684019933'
      return
    }
    // SEND EMAIL
    makeRequest({
      email: data.customerEmail,
      phone: data.customerPhoneNumber,
      name: data.fullName
    })
  }

  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* REQUIRED INPUTS */}
        <div className={styles.inlineInputs}>
          <input
            {...register('customerEmail', {
              required: 'El email es requerido'
            })}
            type="text"
            id="customerEmail"
            placeholder="email"
            className={`${styles.formControl} ${styles.mr5}`}
          />
          <input
            {...register('customerPhoneNumber', {
              required: 'El número de celular es requerido'
            })}
            id="customerPhoneNumber"
            type="text"
            placeholder="número celular"
            className={styles.formControl}
          />
        </div>

        {errors.customerEmail && (
          <div className={styles.inputError}>
            <p>{errors.customerEmail.message}</p>
          </div>
        )}
        {errors.customerPhoneNumber && (
          <div className={styles.inputError}>
            <p>{errors.customerPhoneNumber.message}</p>
          </div>
        )}
        <input
          {...register('fullName', { required: 'Tu nombre es requerido.' })}
          id="fullName"
          type="text"
          placeholder="nombre"
          className={styles.formControl}
        />
        {errors.fullName && (
          <div className={styles.inputError}>
            <p>{errors.fullName.message}</p>
          </div>
        )}

        {/* REQUIRED IF NOT MANUALSHIPPING */}
        {/* ↓ SHIPPING INPUTS ↓ */}
        <div className={styles.inlineInputs}>
          <input
            {...register('state', inputAddressOptions)}
            id="state"
            type="text"
            placeholder="provincia"
            className={`${styles.formControl} ${styles.mr5}`}
          />
          <input
            {...register('city', inputAddressOptions)}
            id="city"
            type="text"
            placeholder="cantón"
            className={`${styles.formControl}`}
          />
        </div>

        <input
          {...register('address1', inputAddressOptions)}
          id="address1"
          type="text"
          placeholder="dirección 1"
          className={styles.formControl}
        />
        <input
          {...register('address2', {
            ...inputAddressOptions,
            required: false
          })}
          id="address2"
          type="text"
          placeholder="dirección 2 (opcional)"
          className={styles.formControl}
        />
        <SubmitButton />
      </form>
    </>
  )
}

export default RequiredFields
