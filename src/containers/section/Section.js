import PropTypes from 'prop-types'
import React from 'react'
import './section.scss'

const Section = ({ title, subtitle, theme, color, type, children }) => (
  <div className={`section section--${theme}`}>
    <div className={type === 'default' ? 'wrapper' : 'wrapper--fluid'}>
      <h1 className='section__title text--bold'>{ title }</h1>
      <h2 className='section__subtitle text--default'>{ subtitle }</h2>
      { children }
    </div>
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
