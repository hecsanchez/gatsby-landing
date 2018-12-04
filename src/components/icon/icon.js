import React from 'react'

const Icon = ({ name }) => (
  <svg className={`icon icon--${name}`} xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`#icon-${name}`} />
  </svg>
)

export default Icon