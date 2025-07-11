"use Client"
import { faBook, faBrain, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ComboCoursePacks() {
  return (
     <div className="flex-aboutarea" data-aos="fade-up" data-aos-duration="1500">
                    <div className="left-area">
                        <div className="thumbnail-wrapper3">
                            <div className="course-1">
                                <img src="images/price-change1.jpg"/>
                            </div>
                            <div className="touimg">
                            <div className="thumbnail image-2">
                                <img src="images/price-change2.png"/>
                            </div>
                            <div className="thumbnail image-3">
                                <img src="images/price-change3.png"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="right-area">
                        <h5 className="tag-line">What we have</h5>
                        <h3>Combo Course Packs</h3>
                        <p>Learn the first, foundational steps in developing Emotional Authenticity</p>

                        <div className="rbt-feature-feature-style-2">
                            <div className="listver">
                                <div className="boxlist">
                                    <FontAwesomeIcon icon={faHeart}/> 
                                </div>
                                <div className="boxlist-content">
                                    <h5>Begin Your Journey To Emotional Authenticity</h5>
                                    <p>It is a long established fact that a reader will be distracted by this on
                                        readable content of when looking at its layout.</p>
                                </div>
                            </div>


                            <div className="listver">
                                <div className="boxlist">
                                    <FontAwesomeIcon icon={faBook}/> 
                                </div>
                                <div className="boxlist-content">
                                    <h5>The Complete Emotional Authenticity Method (one-time Purchase)</h5>
                                    <p>Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity</p>
                                </div>
                            </div>


                            <div className="listver">
                                <div className="boxlist">
                                    <FontAwesomeIcon icon={faBrain}/>
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <div className="boxlist-content">
                                    <h5>The Complete Emotional Authenticity Method Subscription</h5>
                                    <p>Overcome your Worst Day Cycle and reclaim your authentic self with Emotional Authenticity</p>
                                </div>
                            </div>


                        </div>
                        <a target="_blank" href="https://thegreatnessu.com/p/the-complete-emotional-mastery-method-1"
                            className="button">Enroll now</a>

                    </div>
                </div>
  )
}
