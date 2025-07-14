"use client";
import React from 'react';

import Testimonials from '../components/Testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import HealingSection from '../components/HealingSection';

export default function page() {
  return (
    <main className='pt-1'>

      <div className='healing-inner-pages' style={{ backgroundImage: "url('./images/13.jpg')" }}>
        <div className='healing-inner-content'>
          <h3>Parenting issues</h3>
          <p>Parenting is one of the most rewarding yet challenging roles in life. Every parent wants the best for their child, but sometimes they face problems that feel overwhelming.</p>
          <ul className='breadcrumbs'>
            <li><a href="/">Home </a></li>
            <li className="current">/ Parenting issues Details</li>
          </ul>
        </div>
      </div>

      <section className="about-banner">
        <div className="container">
          <div className="flex-about">
            <div className="left-about" data-aos="fade-up" data-aos-duration="1500">
              <h5 className="tag-line">About Kenny</h5>
              <h3>Parenting is one of the most rewarding yet challenging roles in life</h3>
              <p>Common parenting issues include managing children’s behavior, balancing work and family time, disagreements between parents about how to raise their child, and dealing with stress and exhaustion. Modern challenges like too much screen time, peer pressure, and academic pressure can also make parenting harder.</p>

              <div className="video-box-row">
                <ul>
                  <li>
                    <p>Everything starts in childhood.
                      When you finally understand how your past shapes your present, you gain the
                      power to
                      change your future.</p>
                  </li>
                  <li>
                    <p>Author of “Your Journey to Success” & “The Greatness Movement”</p>
                  </li>
                  <li>
                    <p>Host of the "Heal the Hurt" Podcast</p>
                  </li>
                  <li>
                    <p>Creator of Emotional Mastery method</p>
                  </li>
                  <li>
                    <p>Featured in 100+ speaking events, 10,000+ sessions</p>
                  </li>
                  <div className="button-row">
                    <a className="button" href="book-session.html">Book a Session</a>
                  </div>
                </ul>

              </div>

            </div>
            <div className="right-about">
              <div className="about-right-img">
                <img className="imagedesign" src="/images/16.jpg" alt="" />

                <div className="rightdesigncontent">
                  <img src="/images/SVGRepo_icon.svg" alt="" />
                  <h5> Award Winning Consultant!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="postcard">
        <div className="container">
          <div className="postcard-row">
            <div className="postcard-item1">
              <img src="images/5.jpg" />
            </div>
            <div className="postcard-item2">
              <h3>Seeking help from parenting classes, counselors</h3>
              <p>Parenting is one of the most rewarding yet challenging roles in life. Every parent wants the best for their child, but sometimes they face problems that feel overwhelming.

                <br /><br />
                Common parenting issues include managing children’s behavior, balancing work and family time, disagreements between parents about how to raise their child, and dealing with stress and exhaustion. Modern challenges like too much screen time, peer pressure, and academic pressure can also make parenting harder.

              </p>
              <a className="button" href="courses.html">Enroll now </a>
            </div>
          </div>
        </div>
      </section>



      <div className="fore-grid-bg">
        <div className="container">
          <div className='fore-grid'>
            <div className="wellness-col bb-1"><div className="childhoodimg"><img src="/images/14.jpg" alt="Childhood trauma" /></div><div className="trauma"><h4>Childhood trauma</h4><p>He is the author of Your Journey to Success, and Your Journey To Being Yourself and the creator of a process known as The Worst Day Cycle...</p><a className="learn-more-link" href="/childhood-trauma">Read more</a></div></div>

            <div className="wellness-col bb-1"><div className="childhoodimg"><img src="/images/17.jpg" alt="Childhood trauma" /></div><div className="trauma"><h4>Relationship issues</h4><p>He is the author of Your Journey to Success, and Your Journey To Being Yourself and the creator of a process known as The Worst Day Cycle...</p><a className="learn-more-link" href="/relationship-issues">Read more</a></div></div>

            <div className="wellness-col bb-1"><div className="childhoodimg"><img src="/images/13.jpg" alt="Childhood trauma" /></div><div className="trauma"><h4>Parenting issues</h4><p>He is the author of Your Journey to Success, and Your Journey To Being Yourself and the creator of a process known as The Worst Day Cycle...</p><a className="learn-more-link" href="/parenting-issues">Read more</a></div></div>

            <div className="wellness-col bb-1"><div className="childhoodimg"><img src="/images/books.webp" alt="Childhood trauma" /></div><div className="trauma"><h4>Set the boundaries</h4><p>He is the author of Your Journey to Success, and Your Journey To Being Yourself and the creator of a process known as The Worst Day Cycle...</p><a className="learn-more-link" href="/set-boundaries">Read more</a></div></div>

          </div>
        </div>
      </div>







    </main>
  )
}

