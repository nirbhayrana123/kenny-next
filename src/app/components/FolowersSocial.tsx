"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
export default function FolowersSocial() {
  return (
      <section className="stats">
            <div className="stat-item">
                <div className="flex-folowers">
                  <FontAwesomeIcon icon={faFacebookF}/>
                    <h3>88K+</h3>
                </div>

                <p>Happy Clients</p>
            </div>
            <div className="stat-item">
                <div className="flex-folowers"> <FontAwesomeIcon icon={faInstagram}/>
                    <h3>30K+</h3>
                </div>

                <p>Member Active</p>
            </div>
            <div className="stat-item">
                <div className="flex-folowers">
                    <FontAwesomeIcon icon={faYoutube}/>
                    <h3>4.8/5</h3>
                </div>
                <p>Client Review</p>
            </div>
            <div className="stat-item">
                <div className="flex-folowers">
                    <FontAwesomeIcon icon={faTiktok}/>
                    <h3>6K+</h3>
                </div>
                <p>Expert Team</p>
            </div>
        </section>
  )
}
