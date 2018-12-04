import PropTypes from 'prop-types'
import React from 'react'
import './section.scss'

const Section = ({ title, subtitle, children }) => (
  <div>
    <h1>{ title }</h1>
    <h1>{ subtitle }</h1>
    { children }
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
