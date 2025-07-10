'use client';

import React, { useState } from 'react';

export default function VertyVerySection() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      id="top0"
      className="vertyvery"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="vertyvery-box">
          <h3>
            I’ve tried everything—therapy, coaches, self-help books—and something
            still feels broken…
          </h3>
          <p>Ever heard someone say that? Or maybe you’ve felt it yourself?</p>
          <p>
            That nagging feeling that something is off—even after doing all the
            “right” things: reading the books, attending therapy, listening to the
            podcasts, journaling… and still, the same patterns come up. Whether it’s
            anxiety, feeling not good enough, avoiding people, anger outbursts, or
            always second-guessing yourself.
          </p>

          <div
            id="readMoreBox"
            className={`vertyvery-contents ${expanded ? 'expanded' : ''}`}
          >
            {/* Content inside read more... */}
            <p>
              Here’s what most people don’t realize:<br />
              The final unsolved piece isn’t in the latest strategy — it’s often buried in your childhood
              experiences.
            </p>
            <br />
            <br />
            <h4>Let me explain:</h4>
            <p>
              Think about it. As kids, we weren’t just growing physically.
              <br />
              We were also absorbing emotional cues from our environment 24/7.
            </p>
            <ul>
              <li><p>How were we comforted when we cried?</p></li>
              <li><p>Were we encouraged to express ourselves or told to “be quiet”?</p></li>
              <li><p>Did we feel safe being ourselves? Or did we have to perform or behave a certain way
                to be loved?</p></li>
            </ul>
            <p>
              Those early moments shape our emotional wiring.
              <br />
              And if you never learned how to <b>safely feel, express, and regulate</b> emotions, your
              adult life will reflect that missing foundation — no matter how hard you try to “think
              positive” or “stay motivated.”
            </p>

            <h4>For example — let’s talk about introversion.</h4>
            <p>Some people are naturally introverted, and that’s beautiful.
              But sometimes, what looks like introversion is actually a defense mechanism developed in
              childhood.
            </p>
            <p>If you grew up in a home where:</p>
            <ul>
              <li><p>You were criticized or judged a lot,</p></li>
              <li><p>Expressing feelings led to punishment or being ignored,</p></li>
              <li><p>You felt unsafe or emotionally unsupported,</p></li>
            </ul>
            <p>…then you might’ve learned to withdraw, stay quiet, and live more in your head than in your
              heart.</p>
            <p>Not because you're “introverted by nature,” but because you had to protect yourself.</p>

            <h4>And this is just one example.</h4>
            <p>There are dozens of patterns like this — and once you see it, you can’t unsee it.</p>
            <ul>
              <li><p>The overachiever who’s terrified of disappointing others because love was conditional
                growing up.</p></li>
              <li><p>The people pleaser who learned to stay small to avoid conflict in a chaotic home.</p></li>
              <li><p>The emotionally unavailable adult who was never shown how to sit with their own
                feelings, let alone someone else’s.</p></li>
            </ul>
            <p>When people hear these examples, something clicks.</p>
            <p>They realize: “Wait… that’s me.”</p>
            <p>And that’s the beginning of healing.</p>

            <h4>Here's the truth:</h4>
            <p>You're not broken.<br />
              You were just never taught how to:
            </p>
            <ul>
              <li><p>Feel your emotions without shame,</p></li>
              <li><p>Trust others with your vulnerability,</p></li>
              <li><p>Or believe that you’re safe and worthy just as you are.</p></li>
            </ul>

            <h4>The good news?</h4>
            <p>Just like you learned those coping mechanisms, you can unlearn them.<br />
              You can rewire your emotional patterns, feel secure in your relationships, and reconnect
              with your authentic self.</p>
            <h5>Healing isn’t about fixing what’s broken. It’s about nurturing what was neglected.</h5>
            <p>So if you've done all the "outer work" and still feel stuck, maybe it's time to go inward.
              To gently explore not what’s wrong with you — but what happened to you.<br />
              And from there, start giving yourself the emotional safety and care you never got back then.
            </p>
            <h5>Because you're not broken. You're just unfinished. And that’s something you can change.</h5>
            <a href="/book-session" className="button">Start Healing What Was Left Unfinished</a>
          </div>

          <a href="#top0" className="read-more-btn" id="toggleBtn" onClick={handleToggle}>
            {expanded ? 'Read Less' : 'Read More..'}
          </a>

          <img className="form-bac" src="/images/form-bac.png" alt="background" />
        </div>
      </div>
    </section>
  );
}
