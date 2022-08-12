import React from 'react'
import './ourmenu.sass'
import items from './data'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const OurMenu = (): JSX.Element => {
  return (
    <section className='our-menu'>
      <h1 className='our-menu__title'>Preporuke kuvara</h1>
      <p className='our-menu__desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        doloremque sint facilis nobis. Vel, fugit.
      </p>
      <div className='our-menu__container'>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          {items?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='our-menu__card'>
                <div className='our-menu__card-img-container'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='our-menu__card-img'
                  />
                </div>
                <h4 className='our-menu__card-title'>{item.name}</h4>
                <p className='our-menu__card-desc'>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default OurMenu
