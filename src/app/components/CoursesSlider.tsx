"use client";

import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faBook,
  faUserTie,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courseData = [
  {
    image: "/images/price-change1.jpg",
    title: "Begin Your Journey To Emotional Authenticity",
    description: "Learn the first, foundational steps in developing Emotional Authenticity",
    lessons: 12,
    students: 50,
    authorImage: "/images/author-4.jpg",
    price: "$29.77",
    originalPrice: "$120",
  },
  {
    image: "/images/price-change2.png",
    title: "The Complete Emotional Authenticity Method (One-time Purchase)",
    description: "Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity",
    lessons: 12,
    students: 50,
    authorImage: "/images/author-4.jpg",
    price: "$747",
    originalPrice: "$120",
  },
  {
    image: "/images/price-change3.png",
    title: "The Complete Emotional Authenticity Method Subscription",
    description: "Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity",
    lessons: 12,
    students: 50,
    authorImage: "/images/author-4.jpg",
    price: "$77/month",
    originalPrice: "$120",
  },
  {
    image: "/images/price-change1.jpg",
    title: "Begin Your Journey To Emotional Authenticity",
    description: "Learn the first, foundational steps in developing Emotional Authenticity",
    lessons: 12,
    students: 50,
    authorImage: "/images/author-4.jpg",
    price: "$29.77",
    originalPrice: "$120",
  },
];

export default function CoursesSlider() {
  return (
    <section className="courses-master-classes">
      <div className="course-heading" data-aos="fade-up" data-aos-duration="1500">
        <h5 className="tag-line">Learn from me</h5>
        <h3 className="title">Courses and Master Classes</h3>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {courseData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-img">
                  <a href="/courses">
                    <img src={item.image} alt="Course"  className="preview" />
                    <div className="rbt-badge-3">
                      <span>-50%</span> <span>Off</span>
                    </div>
                  </a>
                </div>

                <div className="card-body">
                  <div className="rbt-card-top">
                    <div className="stars">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                      <span>(15 Reviews)</span>
                    </div>
                    <a href="#">
                      <FontAwesomeIcon icon={faBookmark} />
                    </a>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  <div className="info">
                    <div><FontAwesomeIcon icon={faBook} /> {item.lessons} Lessons</div>
                    <div><FontAwesomeIcon icon={faUserTie} /> {item.students} Students</div>
                  </div>

                  <div className="author">
                    <img src={item.authorImage} alt="Author"  />
                    <div className="author-info">Course • By Kenny Weiss</div>
                  </div>

                  <div className="price-row">
                    <div className="price">
                      <span className="current-price">{item.price}</span>
                      <span className="original-price">{item.originalPrice}</span>
                    </div>
                    <a href="/courses" className="learn-more-link">
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
