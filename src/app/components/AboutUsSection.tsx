'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

export default function AboutUsSection() {
  return (
    <section className="aboutus">
      <div className="bg-about"></div>
      <div className="container">
        <div className="about-row">
          {/* Left Side */}
          <div className="left">
            <div className="shine-effect">
              <img src="/images/4.jpg" alt="Team Image" />
            </div>
            <div className="award-badge">
              <img src="/images/SVGRepo_icon.svg" className="award-star" />
              <h4>Award Winning Consultant!</h4>
            </div>
          </div>

          {/* Right Side */}
          <div className="right" data-aos="fade-up" data-aos-duration="1500">
            <h5 className="tag-line">WHO WE ARE</h5>
            <h3>
              Kenny Weiss is an advocate for truth, responsibility, healing, and forgiveness!
            </h3>

            <p className="left-br">
              He specializes in helping people heal from their emotional hurts, co-dependence, and pain from the past so they can once again love themselves.
            </p>

            <div className="services">
              <div className="followers-item">
                <FontAwesomeIcon icon={faFacebookF} />
                <h5>163k</h5>
              </div>

              <div className="followers-item">
                <FontAwesomeIcon icon={faInstagram} />
                <h5>46.8k</h5>
              </div>

              <div className="followers-item">
                <FontAwesomeIcon icon={faYoutube} />
                <h5>174k</h5>
              </div>

              <div className="followers-item">
                <FontAwesomeIcon icon={faTiktok} />
                <h5>133k</h5>
              </div>
            </div>

            <div className="video-box-row">
              <ul>
                <li>
                  <p>
                    Everything starts in childhood. When you finally understand how your past shapes your present, you gain the power to change your future.
                  </p>
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
                  <a className="button" href="meet-kenny.html">
                    Read Kenny’s Story
                  </a>
                  <a className="button" href="book-session.html">
                    Book a Session
                  </a>
                </div>
              </ul>

              <div className="video-box shine-effect">
                <img src="/images/7.jpg" className="play-video" />
                <a
                  target="_blank"
                  className="video-play-button"
                  href="https://www.youtube.com/watch?v=a1udGRR63OA"
                >
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
