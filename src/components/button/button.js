import { Link } from 'gatsby'
import React from 'react'
import './button.scss'

const Button = ({ classes, to, children }) => (
  <Link className={classes} to={ to }>
    { children }
  </Link>
)

export default Button
