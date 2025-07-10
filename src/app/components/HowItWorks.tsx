"use client";
import React, { useEffect, useRef } from "react";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const steps = section.querySelectorAll(".step") as NodeListOf<HTMLElement>;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMiddle = scrollTop + windowHeight / 2;

      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const offsetTop = scrollTop + rect.top;
        const offsetBottom = offsetTop + step.offsetHeight;

        if (scrollMiddle >= offsetTop && scrollMiddle < offsetBottom) {
          steps.forEach((s) => s.classList.remove("active"));
          step.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="paddings" ref={sectionRef}>
      <div className="container">
        <div className="works-sections">
          <div className="left" data-aos="zoom-in-right">
            <h5 className="tag-line">How it works?</h5>
            <h3>Journey to Success Exercises Workbook</h3>
            <p>
              This supplemental workbook to Kenny’s book, Your Journey to Success.
              <br />
              <br />
              While you are learning about the “what” and “why” of your emotional unease,
              self-sabotage, or history of failed relationships, the Journey to Success exercises
              in the workbook Kenny created to accompany the book will help you learn how to
              overcome the hurts of the past so you can finally begin healing.
            </p>
            <div className="cta-box">
              <h3>Your journey starts now.</h3>
              <p>
                The plans you refer to <strong>will soon</strong> be back in our hands. Alderaan?
                I’m not going to Alderaan. I’ve got to <a href="#">go home</a>.
              </p>
              <div className="button-row">
                <a className="button" href="/book-session">
                  Let’s talk
                </a>
              </div>
              <div className="step">
              <small>
                All queries are replied within <u>24hrs</u>.
              </small>
              </div>
            </div>
          </div>

          <div className="right" data-aos="zoom-in-left">
            <div className="step-line"></div>

            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Vision Board Exercise</h4>
                <p>
                  Take a chart paper or digital board. Paste or pin images, quotes, and keywords
                  that represent your goals. Spend 5 minutes daily visualizing those dreams as if
                  they’re real.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Goal Setting Worksheet</h4>
                <p>
                  Write your 1-year, 6-month, and 1-month goals. Make sure they are SMART (Specific,
                  Measurable, Achievable, Relevant, Time-bound). Break each goal into actionable
                  steps.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Daily Self-Reflection Journal</h4>
                <p>
                  At the end of each day, write answers to: What did I learn today? Did I move
                  closer to my goals? What inspired or challenged me today?
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Strength Finder</h4>
                <p>
                  Write down 5 strengths you believe you have. Ask close friends/family what
                  strengths they see in you. Focus on improving one strength each week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
