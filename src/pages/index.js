import React from 'react'

import PricingTable from '../components/pricingTable/pricingTable'
import Layout from '../containers/layout/layout'
import Section from '../containers/section/section'
import Icon from '../components/icon/icon'
import { plans } from '../constants'

import '../images/icon-adobe.svg'
import '../images/icon-blazers.svg'
import '../images/icon-evernote.svg'
import '../images/icon-marvel.svg'
import '../images/icon-data.svg'
import '../images/icon-globe.svg'
import '../images/icon-prototype.svg'
import '../images/icon-texts.svg'
import '../images/icon-blue.svg'


const IndexPage = () => (
  <Layout>
    <Section 
      title='The Best Way to Work Together'
      subtitle='We design and develop software for funded startups and established companies. Here are just some examples of our work'
      background='#ffffff'
      type='default'
      >
      <Icon name="prototype" />
    </Section>
    <Section 
      title='Simple Pricing'
      subtitle='It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind.'
      background='#F9F9F9'
      type='default'
      >
      <PricingTable plans={ plans } />
    </Section>
    <Section 
      title='The Ultimate Pasta Length Editor'
      subtitle='How to boost the design and developing process with a little help of four paws. True story by Snoop Dogg.'
      background='#5E6977'
      type='default'
      >
      
    </Section>
  </Layout>
)

export default IndexPage
