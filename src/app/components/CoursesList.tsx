"use client";

import React from "react";
import Image from "next/image";

const courseData = [
  {
    image: "/images/price-change1.jpg",
    title: "Begin Your Journey To Emotional Authenticity",
    price: "$29.77",
    label: "Course • By Kenny Weiss",
    description: `
      Learn the first, foundational steps in developing Emotional Authenticity <br> <br>

      Learn the first foundational step to turn your feelings of fear, anger, sadness,
      and hopelessness, and transform them into happiness, joy, excitement, and empowerment.
<br> <br>
      Because you have been hurt, of course, you are skeptical if this program really works.
      That’s why I am offering this beginning course so you can see how quickly and easily
      you can move from emotional misery to Emotional Authenticity.
<br> <br>
      Once you have that confidence, you can feel safe and secure that my Complete Emotional
      Authenticity Method will provide you with the transformation you seek.`,
  },
  {
    image: "/images/price-change2.png",
    title: "The Complete Emotional Authenticity Method (one-time Purchase)",
    price: "$747",
    label: "Bundle",
    description: `
      Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity
<br> <br>
      1- Emotional Authenticity is based on the latest neuroscientific model of the brain and
      how it processes emotions. EQ is based on a brain model that was disproved before the
      book was written.
<br> <br>
      2- Emotional Authenticity shows you how all your emotion and feeling definitions are learned
      in childhood, thus giving you complete emotional self-awareness.

      EQ does not.`,
  },
  {
    image: "/images/price-change3.png",
    title: "The Complete Emotional Authenticity Method Subscription",
    price: "$77/month",
    label: "Bundle",
    description: `
      Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity
<br> <br>
      1- Emotional Authenticity is based on the latest neuroscientific model of the brain and
      how it processes emotions. EQ is based on a brain model that was disproved before the
      book was written.
<br> <br>
      2- Emotional Authenticity shows you how all your emotion and feeling definitions are learned
      in childhood, thus giving you complete emotional self-awareness.`,
  },
];

export default function CourseList() {
  return (
    <>
      {courseData.map((course, index) => (
        <div
          key={index}
          className="flex-who-we-are mb-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* Left Side Images */}
          <div className="left-images">
            <div className="main-img">
              <img
                src={course.image}
                alt="Course Image"
          
              />
            </div>
            <div className="video-boxes relative">
              <img
                src="/images/afro-american-business-woman.jpg"
                alt="Video thumbnail"
              
              />
              <a
                id="play-video"
                className="video-play-button absolute inset-0 flex items-center justify-center"
                href="https://youtu.be/a1udGRR63OA?si=D7Iddfp5ezrC8jTJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span></span>
              </a>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="right-content">
            <h3>{course.title}</h3>
            <div className="pricing-set">
              <h4>{course.price}</h4>
              <h4>{course.label}</h4>
            </div>
          <p
  className="description"
  dangerouslySetInnerHTML={{ __html: course.description }}
></p>
            <a
              target="_blank"
              href="https://thegreatnessu.com/p/the-complete-emotional-mastery-method-1"
              className="button"
              rel="noopener noreferrer"
            >
              Enroll now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
