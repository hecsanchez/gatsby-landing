import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './button.scss'

const Button = ({ classes, to, children }) => (
  <Link className={classes} to={ to }>
    { children }
  </Link>
)

Button.propTypes = {
  classes: PropTypes.required,
  to: PropTypes.required,
  children: PropTypes.node.required,
}

export default Button
