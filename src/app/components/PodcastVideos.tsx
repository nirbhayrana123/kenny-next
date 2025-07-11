'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const videoItems = [
  {
    img: '/images/sapret-banner.jpg',
    video: 'https://www.youtube.com/embed/a1udGRR63OA'
  },
  {
    img: '/images/11.jpg',
    video: 'https://www.youtube.com/embed/a1udGRR63OA'
  }
]

const PodcastVideos = () => {
const [playedIndex, setPlayedIndex] = useState<number | null>(null)


  return (
    <section className="podcastvideos">
      <div className="container">
        <div className="swiper videoslider">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true
            }}
            className="swiper-wrapper"
          >
            {videoItems.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
               <div className={`video-sec ${playedIndex === index ? 'playing' : ''}`}>
    {playedIndex === index ? (
      <iframe
        width="100%"
        height="100%"
        src={`${item.video}?autoplay=1&rel=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    ) : (
      <>
        <img src={item.img} alt={`Video ${index}`} />
        <a
          className="video-play-button"
          data-video={item.video}
          onClick={(e) => {
            e.preventDefault()
            setPlayedIndex(index)
          }}
        >
          <span></span>
        </a>
      </>
    )}
  </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next swiper-top-med"></div>
          <div className="swiper-button-prev swiper-top-med"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default PodcastVideos
