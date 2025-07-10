"use client"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function WillAchieve() {
  return (
  <section className="rbt-about-area">
            <div className="container">
                <div className="flex-aboutarea" data-aos="fade-up" data-aos-duration="1500">
                    <div className="left-area">
            <div className="thumbnail-wrapper3">
                            <div className="course-1">
                                <img src="images/17.jpg"/>
                            </div>
                            <div className="touimg">
                            <div className="thumbnail image-2">
                                <img src="images/13.jpg"/>
                            </div>
                            <div className="thumbnail image-3">
                                <img src="images/14.jpg"/>
                            </div>
                        </div>
                        </div>


                        
                    </div>
                    <div className="right-area">
                        <h5 className="tag-line">What we have</h5>
                        <h3>What You Will Achieve?</h3>
                        <p>Imagine waking up with a sense of clarity and inner strength, knowing that every past
                            struggle has paved the way for your growth. With this course, you will:</p>

                        <div className="rbt-feature-feature-style-2">
                            <div className="listver">
                                <div className="boxlist">
                                  <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <div className="boxlist-content">
                                    <h5>Break Free from the “Worst Day Cycle”</h5>
                                    <p>recurring patterns and forge new neural pathways that empower rather than
                                        imprison you.</p>
                                </div>
                            </div>

                            <div className="listver">
                                <div className="boxlist">
                                  <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <div className="boxlist-content">
                                    <h5>Heal Deep Emotional Wounds</h5>
                                    <p>Embrace every part of your story—from childhood scars to present struggles—and turn them into fuel for self-compassion and resilience.</p>
                                </div>
                            </div>

                            <div className="listver">
                                <div className="boxlist">
                                   <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <div className="boxlist-content">
                                    <h5>Cultivate Authentic Connections</h5>
                                    <p>Build meaningful relationships that celebrate your true self, free from the chains of old habits and unresolved pain.</p>
                                </div>
                            </div>

                            <div className="listver">
                                <div className="boxlist">
                                 <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <div className="boxlist-content">
                                    <h5>Discover Unyielding Inner Strength</h5>
                                    <p>Move from a constant “why me?” to a confident “look at what I can do,” knowing that every setback is a setup for a powerful comeback.</p>
                                </div>
                            </div> 
                            
                        </div>
                        <a target="_blank" href="https://checkout.teachable.com/secure/561462/checkout/order_m5mcxtck" className="button">Enroll Now & Start Learning Today!</a>
                    </div>
                </div>

                <div className="flex-online-coures">

                    <div className="online-content">
                        <a href="#" className="culction">New Collection</a>
                        <h4>Online Courses from Histudy</h4>
                        <p>Top instructors from around the world</p>
                    </div>

                    <div className="online-imag">
                        <img src="images/video-01.jpg"/>
                        <a id="play-video" className="video-play-button"
                            href="https://youtu.be/a1udGRR63OA?si=D7Iddfp5ezrC8jTJ" target="_blank" data-toggle="modal"
                            data-target="#savoybeachhotel">
                            <span></span>
                        </a>
                    </div>

                    <div className="online-right-coures">
                        <a href="#" className="culction">Top Teacher</a>
                        <h4>Free Online Courses from Histudy School To Education</h4>
                        <p>Top instructors from around the world</p>
                        <a href="#" className="button">Join Now</a>
                    </div>

                </div>
            </div>
        </section>
  )
}
