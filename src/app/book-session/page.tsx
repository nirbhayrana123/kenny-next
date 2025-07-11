"use client";
import React from 'react';

import Testimonials from '../components/Testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function page() {
  return (
     <main className='pt-1'>
      
        <div className="event-details-setion">
            <div className="container">
                <div className="event-details">
                    <div className="event-details-left">
                        <div className="overflow shine-effect">
                            <img src="images/10.jpg"/>
                        </div>
                    </div>

                    <div className="event-details-right" data-aos="fade-up" data-aos-duration="1500">
                        <h3>Book Your 1 hour Strategy Call</h3>
                        <p>All this is possible because Kenny Weiss uses his Emotional Authenticity Method to help
                            people heal from their trauma, codependency, abuse and the pain of their past so they can
                            once again learn to love themselves. Kenny himself has seen the darkness. He has felt
                            hopeless and now he helps you get comfortable with feeling uncomfortable so you can elevate
                            your life and be your best.
                        </p>
                        <ul className="features full">
                            <li>Reset and reclaim your best self</li>
                            <li>Face your worst and be your best</li>
                            <li>Find your freedom beyond the fear</li>
                            <li>Love and accept your perfect imperfections</li>
                            <li>Set and negotiate healthy boundaries</li>
                            <li>Break free from toxic relationship patterns</li>
                            <li>Create lasting love and connection</li>
                            <li>Live in authenticity</li>
                        </ul>
                        <div className="button-flex">
                            <a className="button" href="#clendly">Get Started</a> <a className="button" href="#clendly">Schedual
                                Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="clendly" className="clendly">
            <h3>Book a Session Now</h3>
            <img src="images/clendly.jpeg"/>
        </section>


        <section className="sesson">
            <div className="container">
                <div className="grid-2">
                    <div className="sesson-images">
                        {/* <div className="sesson-image1-box">
                            <div className="experience-badge">
                                <span>20</span>Year Experience
                            </div>
                            <img src="images/part1.webp">
                        </div> */}
                        <img src="images/12.jpg" className="sesson-image2"/>

                    </div>
                    <div className="sesson-content" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="tag-line">WHO WE ARE</h5>
                        <h3> Why you should book a call </h3>
                        <em>Journey to Emotional Authenticity</em>
                        <p>Kenny Weiss believes if he is going to teach it, he must first live it and learn from it.
                            <br/>
                            Kenny Weiss specializes in helping you heal the pain from your past, transform your toxic
                            relationships, learn to love and accept your perfect imperfections, and reclaim your
                            authentic self!
                            Kenny brings knowledge through his own experience and encourages you to get comfortable with
                            feeling uncomfortable. He is a teller of hard truths, helping you to face your pain and
                            break free from self-destructive behaviors so you can love yourself and elevate your life.

                        </p>
                        <ul className="features">
                            <li>transformational coaching,</li>
                            <li>life-changing programs</li>
                            <li>conquer codependency</li>
                            <li>Master Your Emotions</li>
                            <li>personal development speaker</li>
                            <li>Your Journey to Success</li>
                            <li>Psychology Today, Phoenix Magazine</li>
                            <li>Reader’s Digest</li>
                        </ul>
                        <a className="button" href="/book-session">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="section-wrapper">
            <div className="container">
                <div className="flex-inwrapper">
                    <div className="content aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="tag-line">What we have</h5>
                        <h3>How Can Kenny Help You?</h3>

                        <div className="featuresse">
                            <div className="featurerd"><span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                <strong>Problem Solving</strong>
                            </div>
                            <div className="divider">|</div>
                            <div className="featurerd"><span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                <strong>Relationships</strong>
                            </div>
                            <div className="divider">|</div>
                            <div className="featurerd"><span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                <strong>Growth Career</strong>
                            </div>
                        </div>

                        <p className="desc">
                            His own childhood trauma, challenges with loving himself and others, and past health issues
                            have all been overcome by his own Journey to Emotional Authenticity and he uses this method
                            to help you heal your hurts.
                        </p>
                        <p className="desc">
                            If you have been asking yourself questions like, “Why did this happen to me or what caused
                            me to be like this?” then you may also be wondering, “How do I fix it?”
                        </p>

                        <a href="/meet-kenny" className="button">Discover More</a>
                    </div>

                    <div className="images">
                        <div className="img1"><img src="images/talk-of-coach-and-students-1024x682.jpg"
                                alt="Group Coaching"/></div>
                        <div className="img2"><img src="images/leadership-collaboration.jpg" alt="Workshop Session"/></div>
                        <div className="decor"></div>
                    </div>
                </div>
            </div>
        </div>
              <Testimonials/>
    </main>
  )
}

