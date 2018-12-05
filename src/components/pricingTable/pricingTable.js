import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../../components/icon/icon'
import Button from '../../components/button/button'
import { features } from '../../constants'
import './pricingTable.scss'

const PricingTable = ({ plans }) => (
  <div className='pricing-table row'>
    {
      plans.map((plan) => (
        <div key={plan.name} className={`col--one-third plan ${plan.featured ? 'plan--featured' : ''}`}>
          <div className='plan-section'>
            <span className='plan__title'>{ plan.name }</span>
            <span className='plan__description'>{ plan.description }</span>
          </div>
          <div className='plan-section'>
            <span className='plan__price'>{ plan.price }</span>
            <span className='plan__priceDescription'>{ plan.priceDescription }</span>
            <span className='plan__promoText'>{ plan.promoText }</span>
          </div>
          <div className='plan-section plan-section--last'>
            <ul>
              { 
                plan.features.included.map((feature) => (
                  <li key={ feature } className='feature feature--included'><Icon name='tick'/>{ features[feature] }</li>
                ))
              }
              { 
                plan.features.notIncluded.map((feature) => (
                  <li key={ feature } className='feature feature--notIncluded'>{ features[feature] }</li>
                ))
              }
            </ul>
            <Button classes={`btn ${plan.featured ? 'btn--highlighted' : 'btn--default'}`} to={plan.link}>Get started</Button>
          </div>
        </div>
      ))
    } 
  </div>
)

PricingTable.propTypes = {
  plans: PropTypes.required
}

export default PricingTable
