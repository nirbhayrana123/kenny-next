"use client";
import React from 'react'

export default function Banner() {
  return (
   <section className="banner" style={{backgroundImage: "url('/images/banner.jpg')"}}>
            <div className="container">
                <div className="bannerflex">
                    <div className="banner-content" data-aos="fade-up" data-aos-duration="2000">
                        <h5 className="tag-line white">WELCOME TO YOUR</h5>
                        <h1>Journey to Emotional <br/>Authenticity</h1>
                        <p>Let me show you the way to stop your emotional
                            misery.</p>
                        <div className="button-row">
                            <a className="button" href="courses.html">Explore courses</a>
                            <a className="button whitebt" href="book-session.html">Book a meeting with kenny</a>
                        </div>

                        <p className="people">Trusted by 4,000+ people</p>
                        <div className="logos-people">
                            <img className="logos-people1" src="./images/9.jpg"/>
                            <img className="logos-people2" src="./images/2.jpg"/>
                            <img className="logos-people3" src="./images/16.jpg"/>
                            <img className="logos-people4" src="./images/4.jpg"/>
                            <img className="logos-people5" src="./images/5.jpg"/>
                            <img className="logos-people6" src="./images/7.jpg"/>
                        </div>
                    </div>
                </div>
            </div>

            <img src="./images/shep.svg" className="banner-shep"/>
        </section>
  )
}
