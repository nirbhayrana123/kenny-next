"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faGooglePlusG
} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
<section className="footer">
            <div className="footer-content" data-aos="fade-up" data-aos-duration="1500">
                <h5 className="tag-line">Weekly Newsletter</h5>
                <h3> Get my tips directly into your inbox every Monday morning.</h3>
                <p className="caption">illustration by Ouch.pics</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your e-mail" required />
                    <button type="submit">Subscribe!</button>
                </form>

               <div className="social-icons">
  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
</div>
            </div>


            <div className="marquee">
                <div className="marquee__inner">
                    <div className="marquee__group">
                        <div className="instagram-feed">
                            <a href="#"><img src="./images/1.jpg"/></a>
                            <a href="#"><img src="./images/2.jpg"/></a>
                            <a href="#"><img src="./images/3.jpg"/></a>
                            <a href="#"><img src="./images/4.jpg"/></a>
                            <a href="#"><img src="./images/5.jpg"/></a>
                            <a href="#"><img src="./images/6.jpg"/></a>
                            <a href="#"><img src="./images/7.jpg"/></a>
                            <a href="#"><img src="./images/8.jpg"/></a>
                            <a href="#"><img src="./images/9.jpg"/></a>
                            <a href="#"><img src="./images/10.jpg"/></a>
                            <a href="#"><img src="./images/11.jpg"/></a>
                            <a href="#"><img src="./images/12.jpg"/></a>
                        </div>
                    </div>

                    <div className="marquee__group">
                        <div className="instagram-feed">
                            <a href="#"><img src="./images/1.jpg"/></a>
                            <a href="#"><img src="./images/2.jpg"/></a>
                            <a href="#"><img src="./images/3.jpg"/></a>
                            <a href="#"><img src="./images/4.jpg"/></a>
                            <a href="#"><img src="./images/5.jpg"/></a>
                            <a href="#"><img src="./images/6.jpg"/></a>
                            <a href="#"><img src="./images/7.jpg"/></a>
                            <a href="#"><img src="./images/8.jpg"/></a>
                            <a href="#"><img src="./images/9.jpg"/></a>
                            <a href="#"><img src="./images/10.jpg"/></a>
                            <a href="#"><img src="./images/11.jpg"/></a>
                            <a href="#"><img src="./images/12.jpg"/></a>
                        </div>
                    </div>
                </div>
            </div>



            <p className="rights-reserved">Copyright © 2025 Kenny Weiss | All Rights Reserved</p>
        </section>
  )
}

