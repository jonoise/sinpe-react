import React from 'react'
import Select, { components } from 'react-select'
import { Controller } from 'react-hook-form'
import styles from './Form.module.css'

const selectBank = ({ control, errors }: { control: any; errors: any }) => {
  const selectOptions = [
    { value: 'bn', label: `Banco Nacional` },
    { value: 'bcr', label: `Banco de Costa Rica` },
    { value: 'bac', label: `BAC Credomatic` },
    { value: 'lafise', label: `Banco Lafise` },
    { value: 'davivienda', label: `Banco Davivienda` },
    { value: 'mutual', label: `Mutual Alajuela` },
    { value: 'promerica', label: `Banco Promérica` }
  ]

  return (
    <>
      <Controller
        name="bank"
        rules={{ required: 'Selecciona tu entidad bancaria' }}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectOptions}
            placeholder="Elige tu banco"
            components={{ Option }}
            className={styles.SelectBank}
          />
        )}
      />
      {errors.bank && (
        <div className={styles.inputError}>
          <p>{errors.bank.message}</p>
        </div>
      )}
    </>
  )
}

export default selectBank

const Option = (props: any) => {
  const logo: keyof IBanks = props.data.value
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div
        className={styles.bankLogo}
        style={{ width: '30px', height: '30px' }}>
        <img
          src={mapBankImages[logo]}
          alt="Bank logo"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>
      <components.Option {...props} />
    </div>
  )
}

interface IBanks {
  bn: string
  bcr: string
  bac: string
  lafise: string
  davivienda: string
  mutual: string
  promerica: string
}

const mapBankImages = {
  bn:
    'https://user-images.githubusercontent.com/71573508/136630267-cedf2c4b-6cdb-4db6-a66d-d0978cbb810d.png',
  bcr:
    'https://user-images.githubusercontent.com/71573508/136630287-4c45b448-e80c-4d63-9c22-478849456c32.png',
  bac:
    'https://user-images.githubusercontent.com/71573508/136630286-11b17aef-8420-409f-a41d-7db3a268c699.png',
  lafise:
    'https://user-images.githubusercontent.com/71573508/136630281-7ef96d23-1262-4a24-815d-35d5a09636f4.png',
  davivienda:
    'https://user-images.githubusercontent.com/71573508/136630280-a14343bb-bec1-4db5-bc8e-ef5b2550ead4.png',
  mutual:
    'https://user-images.githubusercontent.com/71573508/136630282-beb7d7c8-8f4c-43db-99fe-ac4b49972ed7.png',
  promerica:
    'https://user-images.githubusercontent.com/71573508/136630285-7a93b23b-8db9-439a-85ae-b9620567ec48.png'
}
