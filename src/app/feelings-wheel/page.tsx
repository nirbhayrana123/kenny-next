"use client";
import React from 'react';

import Testimonials from '../components/Testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import FreeDownloadForm from '../components/FreeDownloadForm';

export default function page() {
  return (
    <main className='pt-1'>
       <section className="wordsendsicyel">
            <div className="container">
                <div className="flexwordsendcycal">
                    <div className="left-wordsendcycal" data-aos="fade-up" data-aos-duration="1500">
                        <h3>Feelings Wheel</h3>
                        <p>The first step in your journey to Emotional
                            Authenticity and discovering your Greatness is
                            to get reconnected to your authentic self. The
                            Feelings Wheel will help you identify how you
                            are feeling so you can recognize how the
                            unhealed pain from the past is being relived in
                            every area of your daily life and keeping you
                            disconnected from your authentic self. Download
                            it below to get started.</p>

                     <FreeDownloadForm/>
                    </div>
                    <div className="right-wordsendcycal">
                        <img src="images/feelings-Wheel.webp"/>
                    </div>
                </div>
            </div>
        </section>

        <div className="card-section">
            <div className="container">
                <div className="card-row green" data-aos="fade-up" data-aos-duration="1500">
                    <div className="card-image-grey-bg">
                        <img src="images/afro-american-business-woman.jpg" className="image-c"/>
                    </div>
                    <div className="card-content-grey-bg">
                        <h3>Your Journey to Being Yourself</h3>
                        <p>The first step in your journey to Emotional
                            Authenticity and discovering your Greatness is
                            to get reconnected to your authentic self. The
                            Feelings Wheel will help you identify how you
                            are feeling so you can recognize how the
                            unhealed pain from the past is being relived in
                            every area of your daily life and keeping you
                            disconnected from your authentic self. Download
                            it below to get started.</p>
                        <div className="button-row canter">
                            <a className="button whitebt" href="/feelings-wheel">Enroll
                                now</a>

                        </div>
                    </div>
                </div>

                <div className="card-row" data-aos="fade-up" data-aos-duration="1500">
                    <div className="card-content-grey-bg">
                        <h3>Feelings Wheel</h3>
                        <p>The first step in your journey to Emotional
                            Authenticity and discovering your Greatness is
                            to get reconnected to your authentic self. The
                            Feelings Wheel will help you identify how you
                            are feeling so you can recognize how the
                            unhealed pain from the past is being relived in
                            every area of your daily life and keeping you
                            disconnected from your authentic self. Download
                            it below to get started.</p>
                        <div className="button-row canter">
                            <a className="button while" href="/books">Available Now at Barnes
                                &amp; Noble</a>
                        </div>
                    </div>

                    <div className="card-image-grey-bg">
                        <img src="images/12.jpg" className="image-c"/>
                    </div>
                </div>

            </div>
        </div>
              <Testimonials/>
    </main>
  )
}

