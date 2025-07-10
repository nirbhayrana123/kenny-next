"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import BookPosts from '../components/Blogcard';

export default function page() {
  return (
    <main className='pt-1'>
       <section className="wordsendsicyel">
            <div className="container">
                <div className="flexwordsendcycal">
                    <div className="left-wordsendcycal" data-aos="fade-up" data-aos-duration="1500">
                        <h3>Worst Day Cycle</h3>
                        <p>For centuries society has stigmatized, and science has incorrectly downplayed, the
                            importance of emotions. Unfortunately, these factors have resulted in humans developing
                            an emotionally self-destructive survival process to absorb the childhood injuries we
                            all experience from perfectly imperfect caregivers. I call this process The Worst Day
                            Cycle.</p>
                    </div>
                    <div className="right-wordsendcycal">
                        <img src="images/worst-day-cycle.png" className="cycle2"/>
                        <img src="images/worst-day-text.png" className="worst-day-text"/>
                    </div>
                </div>
            </div>
        </section>
 
        <div className="section-wrapper">
            <div className="container">
                <div className="flex-inwrapper">
                    <div className="content" data-aos="fade-up" data-aos-duration="1500">
                        <h3>The Replay: Cycle of Shame</h3>

                        <p className="desc">The overwhelming emotional experience of childhood injury, loss of inherent
                            power, and adoption of a false persona create a fear-based traumatic emotional chemical
                            addiction in the brain and body of each child.</p>

                        <p className="desc">This emotional addiction becomes a mostly subconscious shame-based compulsion to
                            replay the unhealed childhood injuries resulting in each adult relationship/s, career/s, and
                            health outcome/s mirroring the original childhood emotional injury the individual has yet to
                            heal.</p>

                        <p className="desc">A person does this to regain their lost power (they are now in control of doing
                            it to themselves) and as a way to let themselves know they need to heal the pain from the
                            past so they can reclaim their authentic self.</p>

                        <p className="desc">Sadly, the individual will deny their part because both society and science have
                            not made them aware of the role they are playing in creating their emotional misery.</p>

                        <p className="desc">Successfully conquering <span className="bolder">The Worst Day Cycle </span>
                            requires healing the shame and
                            facing this denial by developing <span className="bolder">Emotional Authenticity.</span>

                        </p>

                        <p className="desc">In doing so, the individual reclaims their authentic self by healing the pain
                            from the past and discovering the ability to forgive their caregivers and themselves for
                            their part in their life difficulties.

                        </p>



                    </div>

                    <div className="images">
                        <div className="img1"><img src="images/1.jpg" alt="Group Coaching"/></div>
                        <div className="img2"><img src="images/leadership-collaboration.jpg" alt="Workshop Session"/></div>
                        <div className="decor"></div>
                    </div>
                </div>
            </div>
        </div>

        <section className="replay-section" data-aos="fade-up" data-aos-duration="1500">
            <div className="container">
 
              
                <div className="vertyvery-box">
                    <h3>Your Journey to Success</h3>
                    <p>
                        The end result is the creation of a new self-empowering emotional chemical addiction that
                        embraces those perfect imperfections.
                    </p>
                    <p>
                        The resulting wisdom allows individuals to reach their full potential and operate in their
                        destiny.
                    </p>
                    <p>
                        Most importantly, the deep connection and acceptance they longed for are achieved—even if their
                        caregivers never participate in the healing.
                    </p>
                    <img className="form-bac" src="images/form-bac.png"/>
                </div>
            </div>
        </section>
        <BookPosts/>
    </main>
  )
}

