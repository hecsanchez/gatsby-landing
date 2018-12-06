import { Link } from 'gatsby'
import React from 'react'
import './header.scss'
import logo from './module-logo.png'

const Header = ({ menu, closeNav, openNav, navOpen }) => (
  <header>
    <div className='wrapper'>
      <div className='logo'><img alt='logo' src={ logo }/></div>
        <div className={`navigation ${ navOpen ? 'nav--open' : 'nav--close'}`}>
        <div className="icon--close" onClick={ closeNav }>x</div>
        { menu.map((item) => {
          return (
            <Link key={ item.text } className='navigation__item' to={ item.link }>{ item.text }</Link>
          )
        })}
      </div>
    </div>
    <div className="icon--open" onClick={ openNav }><span/><span/><span/></div>
  </header>
)

export default Header
