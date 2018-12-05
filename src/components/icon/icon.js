import React from 'react'
import './icon.scss'

const Icon = ({ className, name }) => (
  <svg className={`icon icon--${name} ${className}`} xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`#icon-${name}`} />
  </svg>
)

export default Icon