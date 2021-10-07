import React from 'react'
import ManualShipping from './manualShipping'
import RequiredFields from './fields'
import ReceiptFieldForm from '../confirmReceipt'

import styles from './Form.module.css'

const ShippingForm = () => {
  return (
    <div className={styles.shippingContainer}>
      <ManualShipping />
      <RequiredFields />
      <ReceiptFieldForm />
    </div>
  )
}

export default ShippingForm
