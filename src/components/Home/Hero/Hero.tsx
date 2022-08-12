import React from 'react'
import './hero.sass'
import frankImage from '../../../assets/sinatra.png'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Hero = (): JSX.Element => {
  return (
    <section className='hero'>
      <img src={frankImage} alt='sinatra obrenovac' className='hero__image' />
      <h1 className='hero__title'>
        Restoran <br /> Sinatra Obrenovac
      </h1>
      <p className='hero__desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illum
        aliquam similique vero impedit totam?
      </p>
      <Link to='/menu' className='hero__cta'>
        Porucite <FiArrowRight className='hero__cta-icon' />
      </Link>
    </section>
  )
}

export default Hero
