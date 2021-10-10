import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'React Component',
    img: require('../../static/img/home/react3d.png').default,
    description: (
      <>
        Puedes integrar Sinpe-React en cualquier checkout que esté potenciado{' '}
        por React.
        <br />+ Requiere poca configuración.
      </>
    )
  },
  {
    title: 'Desde cualquier celular',
    img: require('../../static/img/home/cel3d.png').default,
    description: (
      <>
        Sinpe-React organiza y crea un mensaje de texto con la información
        prevista por el usuario para que ellos sólo realicen la transferencia.
      </>
    )
  },
  {
    title: 'Instalable',
    img: require('../../static/img/home/puggable3d.png').default,
    description: (
      <>
        Tienes la oportunidad de definir tu propia estructura de datos para la
        orden y así conectarla con tu backend o CMS de preferencia.
      </>
    )
  }
]

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureimg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3> <p> {description} </p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {' '}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{' '}
        </div>{' '}
      </div>{' '}
    </section>
  )
}
