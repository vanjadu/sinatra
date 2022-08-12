import React from 'react'
import './chefs.sass'
import chefImage from '../../../assets/chef.jpeg'
import { FiPhoneCall } from 'react-icons/fi'

const Chefs = (): JSX.Element => {
  return (
    <section className='chefs'>
      <h1 className='chefs__title'>Nasi kuvari</h1>
      <div className='chefs__container'>
        <div className='chefs__img-container'>
          <img src={chefImage} alt='sinatra obrenovac' className='chefs__img' />
        </div>
        <div className='chefs__text'>
          <h4 className='chefs__text-title'>Neki podnaslov</h4>
          <p className='chefs__text-subtitle'>
            Sinatra - lorem ipsum dolor sit
          </p>
          <p className='chefs__text-desc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            doloribus dolor maiores veritatis voluptates porro illum obcaecati
            quis fuga animi.
          </p>
          <p className='chefs__text-desc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            doloribus dolor maiores veritatis voluptates porro illum obcaecati
            quis fuga animi.
          </p>
          <a href='tel:+381641365371' className='chefs__link'>
            Pozovite nas <FiPhoneCall className='chefs__link-icon' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Chefs
