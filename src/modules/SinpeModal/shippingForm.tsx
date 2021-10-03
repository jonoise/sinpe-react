import React from 'react'
import useOptions from '../../hooks/useOptions'
import { useForm } from 'react-hook-form'
import styles from './Form.module.css'

const ShippingForm = () => {
  return (
    <div className={styles.shippingContainer}>
      <ManualShipping />
      <RequiredFields />
    </div>
  )
}

export default ShippingForm

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

  return (
    <>
      <label htmlFor="manualShipping">Coordinar entrega por Whatsapp.</label>
      <input
        id="manualShipping"
        type="checkbox"
        onClick={(e) => handleManualShipping(e)}
      />
    </>
  )
}

const RequiredFields = () => {
  const {
    register,
    formState: { errors }
  } = useForm()
  const manualAddress = useOptions((state) => state.manualAddress)
  const inputAddressOptions = { required: true, disabled: manualAddress }

  return (
    <>
      <form action="" className={styles.form}>
        {/* REQUIRED INPUTS */}
        <div className={styles.inlineInputs}>
          <input
            {...register('customerEmail', { required: true })}
            type="text"
            placeholder="email"
            className={`${styles.formControl} ${styles.mr5}`}
          />
          {errors.customerEmail && errors.customerEmail}
          <input
            {...register('customerNumber', { required: true })}
            type="text"
            placeholder="número celular"
            className={styles.formControl}
          />
          <div className="inputError">
            {errors.customerEmail && errors.customerEmail}
            {errors.customerNumber && errors.customerNumber}
          </div>
        </div>

        {/* REQUIRED IF NOT MANUALSHIPPING - SHIPPING INPUTS */}
        <div className={styles.inlineInputs}>
          <input
            {...register('customerNumber', inputAddressOptions)}
            id="state"
            type="text"
            placeholder="provincia"
            className={`${styles.formControl} ${styles.mr5}`}
          />
          <input
            {...register('customerNumber', inputAddressOptions)}
            id="city"
            type="text"
            placeholder="cantón"
            className={`${styles.formControl}`}
          />
        </div>
        <input
          {...register('customerNumber', inputAddressOptions)}
          id="fullName"
          type="text"
          placeholder="nombre completo"
          className={styles.formControl}
        />
        <input
          {...register('customerNumber', inputAddressOptions)}
          id="address1"
          type="text"
          placeholder="dirección 1"
          className={styles.formControl}
        />
        <input
          {...register('customerNumber', {
            ...inputAddressOptions,
            required: false
          })}
          id="address2"
          type="text"
          placeholder="dirección 2 (opcional)"
          className={styles.formControl}
        />
      </form>
    </>
  )
}

// const AddressInputs = ({register}) => {
//   return (
//     <>
//       <input {...register} id="fullName" type="text" placeholder="nombre completo" />
//       <input id="address1" type="text" placeholder="dirección 1" />
//       <input id="address2" type="text" placeholder="dirección 2 (opcional)" />
//       <div>
//         <input id="state" type="text" placeholder="provincia" />
//         <input id="city" type="text" placeholder="cantón" />
//       </div>
//     </>
//   )
// }
