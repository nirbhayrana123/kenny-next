'use client';

import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function HealingSection() {
  useEffect(() => {
    new Swiper('.emotional-swiper', {
      initialSlide: 0,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    // Optional counter animation
    const counters = document.querySelectorAll<HTMLElement>('.count');
    counters.forEach((counter) => {
      counter.innerText = '0';
      const updateCount = () => {
        const target = +counter.dataset.target!;
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="into-section">
      <div className="container">
        <div className="wellness-header" data-aos="fade-up" data-aos-duration="2000">
          <h3>Emotional Healing and Personal Growth</h3>
          <p>
            Take the next step in your healing journey. Reclaim Your Best Life is a powerful guide to emotional healing,
            trauma recovery, and building a life of confidence, peace, and purpose.
          </p>
        </div>

        <div className="swiper emotional-swiper">
          <div className="swiper-wrapper">
            {[
              { img: '/images/7.jpg', title: 'Childhood trauma' },
              { img: '/images/15.jpg', title: 'Relationship issues' },
              { img: '/images/add.jpg', title: 'Parenting issues' },
              { img: '/images/8.jpg', title: 'Set the boundaries' },
            ].map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="wellness-col bb-1">
                  <div className="childhoodimg">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="trauma">
                    <h4>{item.title}</h4>
                    <p>
                      He is the author of Your Journey to Success, and Your Journey To Being Yourself and the creator of
                      a process known as The Worst Day Cycle...
                    </p>
                    <a className="learn-more-link" href="/childhood-trauma">Read more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        <div className="progress-content">
          {[
            { value: 500, label: 'HAPPY CLIENTS' },
            { value: 70, label: 'ONLINE COURSES' },
            { value: 100, label: 'SATISFACTION' },
            { value: 100, label: 'SUPPORT' },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="count" data-target={item.value}>0</h3>
              <h5>{item.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
