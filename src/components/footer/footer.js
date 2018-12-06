import React from 'react'
import { Link } from 'gatsby'
import Icon from '../../components/icon/icon'

import './footer.scss'

const Footer = ({ icon, description, links, language, changeLanguage, t }) => (
  <footer>
    <div className='wrapper'>
      <div className='row'>
        <div className='col--one-fourth'>
          <Icon name={ icon }/>
          <span className='footer__description'>{ t(description) }</span>
        </div>
        <div className='col--one-half row footer__menu-container'>
          {
            links.map((column)=>(
              <div key={column.title} className='col--one-third footer__menu'>
                <span className='column__title'>{ t(column.title) }</span>
                {
                  column.links.map((link)=>(
                    <li key={ link.text } className='footer__link'><Link to={ link.to }>{ t(link.text) }</Link></li>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className="language">
          <Icon className="icon-language" name={ 'globe' }/>
          <select className='languageSelector' onChange={ changeLanguage } value={language}>
            <option value="en" >English</option>
            <option value="es" >Español</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
