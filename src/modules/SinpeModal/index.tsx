import React from 'react'
import { SinpeModalProps } from '../../types'

import globalStyles from '../../../styles/Global.module.css'
import modalStyles from '../../../styles/Modal.module.css'

import { FaTimes } from 'react-icons/fa'
import Instructions from './instructions'
import ShippingForm from './shippingForm'

const SinpeModal = (props: SinpeModalProps) => {
  const { onClose } = props
  const outerRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  const triggerClose = (e: React.ChangeEvent<any>) => {
    if (outerRef.current === e.target) {
      onClose()
    }
  }

  return (
    <>
      <div
        ref={outerRef}
        className={modalStyles.container}
        onClick={triggerClose}>
        <div className={props.modalClass}>
          <ModalHeader onClose={onClose} />
          <ModalContent>
            <Instructions />
            <ShippingForm />
          </ModalContent>
        </div>
      </div>
    </>
  )
}

export default SinpeModal

// TODO: header types
const ModalHeader = (props: any) => {
  const { onClose } = props
  return (
    <div className={modalStyles.header}>
      <h2>Pago con SINPE Móvil</h2>
      <p className={globalStyles.btn}>
        <FaTimes onClick={() => onClose()} />
      </p>
    </div>
  )
}

const ModalContent = (props: any) => {
  return <div className={modalStyles.content}>{props.children}</div>
}
