import React from 'react'
import './menuhero.sass'
import menuImage from '../../../assets/menu.jpeg'

const MenuHero = (): JSX.Element => {
  return (
    <section className='menu-hero'>
      <div className='menu-hero__image-container'>
        <img
          src={menuImage}
          alt='Sinatra Obrenovac'
          className='menu-hero__image'
        />
      </div>
      <h1 className='menu-hero__title'>
        <span>
          Lorem ipsum dolor sit, <br />
        </span>
        <span>
          <div className='menu-hero__title-line'></div> lorem ipsum dolor sit
          amet.
        </span>
      </h1>
    </section>
  )
}

export default MenuHero
