import React from 'react'
import x from './css/LoaderCards.module.css'
const LoaderCards = () => {
  return (
    <div className={x.card}>
      <section>

      <div className={`${x.card__skeleton} ${x.card__description}`}></div>
      <div className={`${x.card__skeleton} ${x.card__title}`}></div>
      </section>
      <section>
        <div className={`${x.card__skeleton} ${x.card__title}`}></div>
        <div className={`${x.card__skeleton} ${x.card__title}`}></div>
      </section>
    </div>
  )
}

export default LoaderCards
