import PropTypes from 'prop-types'
import React from 'react'
import './section.scss'

const Section = ({ title, subtitle, background, color, type, children }) => (
  <div className="section" style={{background: background}}>
    <div className={type === 'default' ? 'wrapper' : 'wrapper--fluid'}>
      <h1>{ title }</h1>
      <h1>{ subtitle }</h1>
      { children }
    </div>
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
