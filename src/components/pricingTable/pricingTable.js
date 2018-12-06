import React from 'react'
import Icon from '../../components/icon/icon'
import Button from '../../components/button/button'
import { features } from '../../constants'
import './pricingTable.scss'

const PricingTable = ({ plans, t }) => (
  <div className='pricing-table row'>
    {
      plans.map((plan) => (
        <div key={plan.name} className={`col--one-third plan ${plan.featured ? 'plan--featured' : ''}`}>
          <div className='plan-section'>
            <span className='plan__title'>{ t(plan.name) }</span>
            <span className='plan__description'>{ t(plan.description) }</span>
          </div>
          <div className='plan-section'>
            <span className='plan__price'>{ t(plan.price) }</span>
            <span className='plan__priceDescription'>{ t(plan.priceDescription) }</span>
            <span className='plan__promoText'>{ t(plan.promoText) }</span>
          </div>
          <div className='plan-section plan-section--last'>
            <ul>
              { 
                plan.features.included.map((feature) => (
                  <li key={ feature } className='feature feature--included'><Icon name='tick'/>{ t(features[feature]) }</li>
                ))
              }
              { 
                plan.features.notIncluded.map((feature) => (
                  <li key={ feature } className='feature feature--notIncluded'>{ t(features[feature]) }</li>
                ))
              }
            </ul>
            <Button classes={`btn ${plan.featured ? 'btn--highlighted' : 'btn--default'}`} to={plan.link}>{ t('Get started') }</Button>
          </div>
        </div>
      ))
    } 
  </div>
)

export default PricingTable
