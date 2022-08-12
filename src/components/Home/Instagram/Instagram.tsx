import React from 'react'
import './instagram.sass'
import { FiExternalLink } from 'react-icons/fi'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import plateOneImage from '../../../assets/instagram/plate_1.jpeg'
import plateTwoImage from '../../../assets/instagram/plate_2.jpeg'
import plateThreeImage from '../../../assets/instagram/plate_3.jpeg'
import plateFourImage from '../../../assets/instagram/plate_4.jpeg'
import plateFiveImage from '../../../assets/instagram/plate_5.jpeg'

const Instagram = (): JSX.Element => {
  return (
    <div className='gram'>
      <h1 className='gram__title'>
        Pratite nas na{' '}
        <a
          href='https://www.instagram.com/sinatraobrenovac/'
          target='_blank'
          rel='noreferrer'
        >
          Instagramu <FiExternalLink className='gram__title-icon' />
        </a>
      </h1>
      <p className='gram__desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, in?
      </p>
      <div className='gram__container'>
        <Swiper slidesPerView={3} spaceBetween={30} className='mySwiper'>
          <SwiperSlide>
            <div className='gram__card'>
              <img
                src={plateOneImage}
                alt='sinatra obrenovac'
                className='gram__image'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='gram__card'>
              <img
                src={plateTwoImage}
                alt='sinatra obrenovac'
                className='gram__image'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='gram__card'>
              <img
                src={plateThreeImage}
                alt='sinatra obrenovac'
                className='gram__image'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='gram__card'>
              <img
                src={plateFourImage}
                alt='sinatra obrenovac'
                className='gram__image'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='gram__card'>
              <img
                src={plateFiveImage}
                alt='sinatra obrenovac'
                className='gram__image'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Instagram
