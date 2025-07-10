"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function HealTheHurtPodcast() {
  return (
     <div className="section-wrapper">
            <div className="container">
                <div className="flex-inwrapper">
                    <div className="content" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="tag-line">What we have</h5>
                        <h3>Heal The Hurt Podcast</h3>

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

                        <p>Heal The Hurt is a weekly podcast where Kenny shares the knowledge, skills, and tools to love
                            and accept your perfect imperfections so you can reclaim your authentic self through the
                            process of Emotional Authenticity.
                            <br />
                            <br />
                            In his podcast, Kenny leads by example, guiding you on your Journey to Emotional
                            Authenticity so you can be the voice for your hurt, even as he shares his own and his
                            recovery from it. His experience and knowledge are gifts he bestows upon you for your own
                            healing.
                        </p>
                        <div className="button-row">
                            <a href="podcast.html" className="button">See podcast</a>
                            <a className="button" target="_blank"
                                href="https://www.barnesandnoble.com/w/book/1144344669?ean=9798218311940">Available Now
                                at Barnes &amp; Noble</a>
                        </div>
                    </div>

                    <div className="images">
                        <div className="img1"><img src="images/talk-of-coach-and-students-1024x682.jpg"
                                alt="Group Coaching"/></div>
                        <div className="img2"><img src="images/KEN-Podcast-1.webp" alt="Workshop Session"/></div>
                        <div className="decor"></div>
                    </div>
                </div>
            </div>
        </div>
  )
}
