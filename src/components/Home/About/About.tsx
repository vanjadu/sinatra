import React from 'react'
import './about.sass'
import aboutImage from '../../../assets/about.jpeg'

const About = (): JSX.Element => {
  return (
    <section className='about'>
      <h1 className='about__title'>
        <span>
          Lorem ipsum dolor sit, <br />
        </span>
        <span>
          <div className='about__title-line'></div> lorem ipsum dolor sit amet.
        </span>
      </h1>
      <p className='about__desc'>
        Nas restoran je mesto gde se možete okupiti sa svojom porodicom,
        prijateljima, saradnicima i uživati u prijatnom ambijentu i raznim
        ukusima vrhunske kuhinje. Uvek ljubazno osoblje učiniće da se osećate
        što prijatnije. Za Vas želimo samo najbolje i najkvalitetnije.
      </p>
      <img src={aboutImage} alt='sinatra obrenovac' className='about__image' />
    </section>
  )
}

export default About
