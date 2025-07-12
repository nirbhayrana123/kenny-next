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

      <div className='healing-inner-pages' style={{ backgroundImage: "url('/images/books.webp')" }}>
        <div className='healing-inner-content'>
          <h3>Set the boundaries</h3>
          <p>Setting healthy boundaries is an important part of self-care and strong relationships. Boundaries are the limits we set to protect our time, energy, emotions, and personal space.</p>
          <ul className='breadcrumbs'>
            <li><a href="/">Home </a></li>
            <li className="current">/ Childhood Trauma Details</li>
          </ul>
        </div>
      </div>

      <section className="about-banner">
        <div className="container">
          <div className="flex-about">
            <div className="left-about" data-aos="fade-up" data-aos-duration="1500">
              <h5 className="tag-line">About Kenny</h5>
              <h3>Childhood trauma refers to frightening, dangerous</h3>
              <p>Childhood trauma refers to frightening, dangerous, or distressing events that happen during childhood. It can include abuse, neglect, loss of a loved one, domestic violence, bullying, or any situation that makes a child feel unsafe and powerless.</p>

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
                <img className="imagedesign" src="/images/kanny2.webp" alt="" />

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
              <img src="images/15.jpg" />
            </div>
            <div className="postcard-item2">
              <h3>Good boundaries create respect and balance.</h3>
              <p>Setting healthy boundaries is an important part of self-care and strong relationships. Boundaries are the limits we set to protect our time, energy, emotions, and personal space.<br /><br />

                Many people struggle to say “no” because they don’t want to hurt others or fear conflict. But without clear boundaries, people can feel stressed, used, or resentful.</p>
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

