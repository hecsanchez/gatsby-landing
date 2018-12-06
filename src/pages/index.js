import React, { Component } from 'react'
import { Link } from 'gatsby'
import i18n from "i18next";
import { reactI18nextModule, withNamespaces } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import PricingTable from '../components/pricingTable/pricingTable'
import Layout from '../containers/layout/layout'
import Section from '../containers/section/section'
import Icon from '../components/icon/icon'
import Button from '../components/button/button'
import { sellingPoints, plans, clients } from '../constants'
import resources from '../locales'

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
import computer from '../images/computer.png'

i18n.use(reactI18nextModule).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

class IndexPage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      language: 'es'
    }
  }

  changeLanguage = (e) => {
    const language = e.target.value
    i18n.changeLanguage(language);
    this.setState({ language })
  }

  render() {
    const { t } = this.props

    return (
      <Layout changeLanguage={ this.changeLanguage } language={ this.state.language } t={ t }>
        <Section 
          title={ t('section1__title') }
          subtitle={ t('section1__subtitle') }
          theme='default'
          type='default'
          >
          <img className='hero' src={heroImage} alt='hero' />
          <div className='row'>
            { 
              sellingPoints.map(({ icon, title, description }) => (
                <div key={ title } className='col--one-third selling-point'>
                  <Icon className='icon--selling-point' name={ icon } />
                  <span className='selling-point__title text--bold'>{ t(title) }</span>
                  <span className='selling-point__description text--default'>{ t(description) }</span>
                </div>
              ))
            }
          </div>
        </Section>
        <Section type='alt' theme='carousel'>
          <div className="row">
            <div className="col--one-half">
              <img src={computer} alt='computer'></img>
            </div>
            <div className="col--one-half">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
              >
                <Slider>
                  <Slide index={0}> 
                    <h1>Powerful Extensions</h1>
                    <p>This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature</p>
                    <Link className='link--carousel' to='#'>Learn more ></Link>
                  </Slide>
                  <Slide index={1}> 
                    <h1>Powerful Extensions</h1>
                    <p>This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature</p>
                  </Slide>
                  <Slide index={2}> 
                    <h1>Powerful Extensions</h1>
                    <p>This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature</p>
                  </Slide>
                </Slider>
                <Dot slide={0} />
                  <Dot slide={1} />
                  <Dot slide={2} />
              </CarouselProvider>
            </div>
          </div>
        </Section>
        <Section 
          title={ t('Simple Pricing') }
          subtitle={ t('It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind') }
          theme='gray'
          type='default'
          >
          <PricingTable plans={ plans } t={ t } />
        </Section>
        <Section 
          title={ t('The Ultimate Pasta Length Editor') }
          subtitle={ t('How to boost the design and developing process with a little help of four paws') }
          theme='dark'
          type='default'
          >
          <Button to='/' classes='btn btn--highlighted btn--lg'>{ t('Try it for free') }</Button>
          <span className='text--md'>{ t('Superpasta trusted and used by multiple companies') }</span>
          <div className='row row--sb'>
          { 
            clients.map((client) => (
              <Icon key={client} className='icon--client' name={client} />
            ))
          }
          </div>
          
        </Section>
      </Layout>
    )
  }
}

export default withNamespaces()(IndexPage)
