import React from 'react'
import { SinpeModalProps } from './types'
import styles from '../styles/Modal.module.css'

const SinpeModal = (props: SinpeModalProps) => {
  return (
    <>
      <section className={styles.area}>
        <div className={styles.modalContainer}>
          <div className={props.modalClass}>🎉</div>
        </div>
      </section>
    </>
  )
}

export default SinpeModal
