"use client";
import React from 'react'

export default function AboutKenny() {
  return (
      <section className="about-banner">
            <div className="container">
                <div className="flex-about">
                    <div className="left-about" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="tag-line">About Kenny</h5>
                        <h3>Kenny Weiss is an advocate for truth, responsibility, healing, and forgiveness!</h3>
                        <p>He specializes in helping people heal from their emotional hurts, co-dependence, and pain
                            from the past so they can once again love themselves.</p>

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
                                    <a className="button" href="meet-kenny.html">Read Kenny’s Story</a>
                                    <a className="button" href="book-session.html">Book a Session</a>
                                    <a className="button" href="courses.html">Enroll now </a>
                                </div>
                            </ul>

                        </div>

                    </div>
                    <div className="right-about">
                        <div className="about-right-img">
                            <img className="imagedesign" src="/images/kanny2.jpg" alt=""/>

                            <div className="rightdesigncontent">
                                <img src="/images/SVGRepo_icon.svg" alt=""/>
                                <h5> Award Winning Consultant!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
