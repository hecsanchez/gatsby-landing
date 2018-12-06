import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { menu, footerDescription, footerLinks } from '../../constants'

import './layout.scss';

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  openNav = () => {
    this.setState({ navOpen: true })
  }

  closeNav = () =>{
    this.setState({ navOpen: false })
  }

  render() {
    const { t, language } = this.props;

    const { children, changeLanguage } = this.props;

    return(
      <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Helmet
                title={ data.site.siteMetadata.title }
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header 
                siteTitle={ data.site.siteMetadata.title } 
                menu={ menu }
                openNav={ this.openNav }
                closeNav={ this.closeNav }
                navOpen={ this.state.navOpen }
                />
              {children}
              <Footer 
                icon='blue'
                description={ footerDescription }
                links={ footerLinks } 
                language={ language }
                changeLanguage={ changeLanguage }
                t={ t }
              />
            </>
          )}
        />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
