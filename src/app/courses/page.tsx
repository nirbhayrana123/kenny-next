"use client";
import React from 'react'
;
import CourseList from '../components/CoursesList';
import ComboCoursePacks from '../components/ComboCoursePacks';
import Testimonials from '../components/Testimonials';

export default function page() {
  return (
     <main className='pt-1'>
        <section className="sourses-section">
            <div className="course-heading" data-aos="fade-up" data-aos-duration="1500">
                <h5 className="tag-line">Learn from me</h5>
                <h3>Courses and Master classNamees</h3>
            </div>

            <div className="container ">
              <CourseList/>
              <ComboCoursePacks/>
              </div>
              </section>
              <Testimonials/>
    </main>
  )
}

