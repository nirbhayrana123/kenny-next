"use client";
import React from 'react' 
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function page() {
  return (
    <main className='pt-1'>
<div className="contactsection">
            <div className="container">
                <div className="contact-into" data-aos="fade-up" data-aos-duration="1500">
                    <h5 className="tag-line">Contact us</h5>
                    <h3>Let’s Make Something <br/>Great Together</h3>
                </div>
                <div className="contactflexform">
                    <div className="leftcontactimg">
                        <img src="images/others-img2.png"/>
                    </div>

                    <ContactForm/>
                </div>

                <div className="contact-boxesflex">
                    <div className="contacts-box">
                        <div className="iconcontact">
                            <FontAwesomeIcon icon={faEnvelope}/> 
                        </div>
                        <div className="contact-content">
                            <h4>Email</h4>
                            <a href="#">kw@kennyweiss.net</a>
                        </div>
                    </div>

                    <div className="contacts-box">
                        <div className="iconcontact">
                            <FontAwesomeIcon icon={faPhone}/> 
                        </div>
                        <div className="contact-content">
                            <h4>Phone</h4>
                            <a href="#">123456789</a>
                        </div>
                    </div>
                    <div className="contacts-box">
                        <div className="iconcontact">
                            <FontAwesomeIcon icon={faLocation}/> 
                        </div>
                        <div className="contact-content">
                            <h4>Schedule</h4>
                            <p>Sunday-Fri: 9 AM – 6 PM</p>
                        </div>
                    </div>


                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps?q=New+York,+USA&output=embed" allowFullScreen
                        loading="lazy"></iframe>
                </div>
            </div>

        </div>
    </main>
  )
}

