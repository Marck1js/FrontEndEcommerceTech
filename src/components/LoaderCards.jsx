import React from 'react'
import x from './css/LoaderCards.module.css'
const LoaderCards = ({index}) => {
  return (
    <div className={x.card}>
      <section>

      <div className={`${x.card__skeleton} ${x.card__description}`}></div>
      <div className={`${x.card__skeleton} ${x.card__title}`}></div>
      </section>
      <section>
        <div className={`${x.card__skeleton} ${x.card__title}`}>{index}</div>
        <div className={`${x.card__skeleton} ${x.card__title}`}></div>
      </section>
    </div>
  )
}



export const LoaderCards2 = () => {
  return (
    <div className={x.card2}>
      <section>

      <div className={`${x.card__skeleton} ${x.card__description}`}></div>
      <div className={`${x.card__skeleton} ${x.card__title2}`}></div>
      </section>
      <section>
        <div className={`${x.card__skeleton} ${x.card__title2}`}></div>
        <div className={`${x.card__skeleton} ${x.card__title2}`}></div>
      </section>
    </div>
  )
}

export default LoaderCards 
