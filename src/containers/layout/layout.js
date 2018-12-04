import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './layout.scss'

const menu = [
  { text: 'Features', link: '/features' },
  { text: 'Pricing', link: '/pricing' },
  { text: 'Learn more', link: '/learn-more' },
  { text: 'Contact sales', link: '/contact' },
]

const Layout = ({ children }) => (
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
        <Header siteTitle={ data.site.siteMetadata.title } menu={ menu }/>
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
