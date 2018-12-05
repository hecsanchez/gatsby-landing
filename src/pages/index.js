import React from 'react'
import PricingTable from '../components/pricingTable/pricingTable'
import Layout from '../containers/layout/layout'
import Section from '../containers/section/section'
import Icon from '../components/icon/icon'
import Button from '../components/button/button'
import { sellingPoints, plans, clients } from '../constants'

import '../images/icon-adobe.svg'
import '../images/icon-brazzers.svg'
import '../images/icon-evernote.svg'
import '../images/icon-marvel.svg'
import '../images/icon-data.svg'
import '../images/icon-globe.svg'
import '../images/icon-prototype.svg'
import '../images/icon-texts.svg'
import '../images/icon-motorola.svg'
import '../images/icon-netflix.svg'
import '../images/icon-blue.svg'
import '../images/icon-tick.svg'
import heroImage from '../images/hero.jpg'


const IndexPage = () => (
  <Layout>
    <Section 
      title='The Best Way to Work Together'
      subtitle='We design and develop software for funded startups and established companies. Here are just some examples of our work'
      theme='default'
      type='default'
      >
      <img className='hero' src={heroImage} alt='hero' />
      <div className='row'>
      { 
        sellingPoints.map(({ icon, title, description }) => (
          <div className='col--one-third selling-point'>
            <Icon className='icon--selling-point' name={ icon } />
            <span className='selling-point__title text--bold'>{ title }</span>
            <span className='selling-point__description text--default'>{ description }</span>
          </div>
        ))
      }
      </div>
    </Section>
    <Section 
      title='Simple Pricing'
      subtitle='It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind.'
      theme='gray'
      type='default'
      >
      <PricingTable plans={ plans } />
    </Section>
    <Section 
      title='The Ultimate Pasta Length Editor'
      subtitle='How to boost the design and developing process with a little help of four paws. True story by Snoop Dogg.'
      theme='dark'
      type='default'
      >
      <Button to='/' classes='btn btn--highlighted btn--lg'>Try it for free</Button>
      <span className='text--md'>Superpasta trusted and used by multiple companies</span>
      <div className='row row--sb'>
      { 
        clients.map((client) => (
          <Icon className='icon--client' name={client} />
        ))
      }
      </div>
      
    </Section>
  </Layout>
)

export default IndexPage
