"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck } from "@fortawesome/free-solid-svg-icons";
export default function KennyWeissStory() {
  return (
      <section className="who-we-are">
            <div className="container ">
                <div className="flex-who-we-are">
                    <div className="left-images">
                        <div className="main-img">
                            <img src="images/business-woman-working-in-an-office.jpg" alt="Woman on computer" />
                        </div>
                        <div className="video-boxes">
                            <img src="images/afro-american-business-woman.jpg" alt="Video thumbnail" />
                            <a id="play-video" className="video-play-button" target="_blank"
                                href="https://youtu.be/a1udGRR63OA?si=D7Iddfp5ezrC8jTJ" data-toggle="modal"
                                data-target="#savoybeachhotel">
                                <span></span>
                            </a>
                        </div>
                    </div>

                    <div className="right-content" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="tag-line">WHO WE ARE</h5>
                        <h3>The Kenny Weiss Story:</h3>
                        <p className="description">
                            Raised by perfectly imperfect parents who had four children by the time they were in their
                            early 20s, emotions ran high in the Weiss household. Add a father who was beaten as a child
                            into the mix, along with a mother who was adopted, and it is easy to see why Kenny grew up
                            in a home with a raging father and an alcoholic mother.
                        </p>

                        <div className="feature">
                            <div className="feature-icon"><span><FontAwesomeIcon icon={faCheck}/>
                                </span></div>
                            <div className="feature-text">
                                <h4>Emotional Authenticity process</h4>
                                <p>This is when he began development of his unique Emotional Authenticity process</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon"><span><FontAwesomeIcon icon={faCheck}/></span></div>
                            <div className="feature-text">
                                <h4>The Greatness Movement.</h4>
                                <p>and started the journey that would later become The Greatness Movement.</p>
                            </div>
                        </div>

                        <a href="/book-session" className="button">Book a meeting with kenny</a>
                    </div>
                </div>
                <div className="business-coach">
                    <div className="content-business-coach">
                        <h5>"A business coach builds a trusting relationship to support<br/> and inspire clients, helping
                            them navigate challenges and achieve<br/> their goals with confidence and authenticity."
                            <span>Kenny Weiss</span>
                        </h5>
                    </div>
                    <div className="exprince">
                        <div className="year-box">
                            <h3>20+</h3>
                            <h5>Years Experience</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}
