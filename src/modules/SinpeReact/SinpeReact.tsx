import React, { useEffect } from 'react'
import { SinpeProps } from '../../types/index'
import useModal from '../../hooks/useModal'
import SinpeModal from '../SinpeModal/index'
import styles from '../../../styles/Modal.module.css'
import initSinpe from '../../logic/initSinpe'
import useProperConf from '../../hooks/useProperConf'
const SinpeReact = (props: SinpeProps) => {
  const setProperConfig = useProperConf((state) => state.setIsProperConfig)
  const btnClass = props.btnClass ? props.btnClass : styles.defaultButtonStyle

  useEffect(() => {
    const validInit = initSinpe(props)
    setProperConfig(validInit)
  }, [props])

  const modalClass = props.modalClass
    ? props.modalClass
    : styles.defaultModalStyle

  const { isOpen, onToggle, onClose } = useModal()

  return (
    <>
      <button className={btnClass} onClick={onToggle}>
        Pagar con Sinpe
      </button>
      {isOpen && <SinpeModal modalClass={modalClass} onClose={onClose} />}
    </>
  )
}

export default SinpeReact
