'use client';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Carolyn Willms',
    role: 'Amy McCollum',
    heading: 'Monday',
    message: 'This method of coaching is what was missing. Highly recommend!',
    photo: '/images/15.jpg',
    stars: '/images/star.svg',
    bg: '/images/testimonial-img.svg',
  },
  {
    name: 'John Doe',
    role: 'CEO, Techy',
    heading: 'Amazing!',
    message: 'Transformational journey! Kenny’s work changed my emotional wiring completely.',
    photo: '/images/7.jpg',
    stars: '/images/star.svg',
    bg: '/images/testimonial-img.svg',
  },
  {
    name: 'Jane Smith',
    role: 'Therapist',
    heading: 'Powerful Healing',
    message: 'This method of coaching is what was missing. Highly recommend!',
    photo: '/images/15.jpg',
    stars: '/images/star.svg',
    bg: '/images/testimonial-img.svg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[currentIndex];

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="testimonia-row">
          <div className="testimonial-text">
            <h5 className="tag-line">Testimonials</h5>
            <h3>
              Trusted by the world's <br />
              fastest growing <br />
              companies
            </h3>
            <div className="testimonial-navigation">
              <button onClick={prevTestimonial}>
                <FontAwesomeIcon icon={faChevronLeft}/> 
              </button>
              <button onClick={nextTestimonial}>
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>
            </div>
          </div>

          <div className="testimonial-card" id="testimonial-card">
            <img src={t.bg} className="testimonialimg" alt="bg" />
            <img src={t.photo} alt={t.name} />
            <div className="testimonial-content">
              <h3>{t.heading}</h3>
              <img src={t.stars} className="stars" alt="stars" />
              <p className="testimonial-message">{t.message}</p>
              <p className="testimonial-author">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
