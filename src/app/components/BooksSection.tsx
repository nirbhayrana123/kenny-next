"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BooksSection() {
  return (
    <section className="who-we-are bookssection">
      <div className="container">
        <div className="flex-who-we-are">
          {/* Left Side Images */}
          <div className="left-images">
            <div className="main-img">
              <img src="/images/books.webp" alt="Woman on computer" />
            </div>
            <div className="video-boxes">
              <img src="/images/books2.jpg" alt="Video thumbnail"  />
              <a
                id="play-video"
                className="video-play-button"
                target="_blank"
                href="https://youtu.be/a1udGRR63OA?si=D7Iddfp5ezrC8jTJ"
                data-toggle="modal"
                data-target="#savoybeachhotel"
              >
                <span></span>
              </a>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="right-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
            <h5 className="tag-line">Our Books</h5>
            <h3>Your Journey to Being Yourself & Success Books</h3>
            <p className="description">
              I’m thrilled to introduce “Your Journey to Being Yourself” – my new book that’s as
              hard-hitting as it is transformative. This book will revolutionize the way you think about
              intellect and emotions. Get ready to reconnect with your authentic self.
            </p>

            <div className="feature">
              <div className="feature-icon">
                <span><FontAwesomeIcon icon={faCheck} />
</span>
              </div>
              <div className="feature-text">
                <h4>Your Journey to Being Yourself</h4>
                <p>
                  Your feelings come first, and your intellect and words emerge from the emotions that
                  follow.
                </p>
              </div>
            </div>

            <div className="button-row">
              <a
                className="button"
                target="_blank"
                href="https://amzn.to/3U1IGNZ"
              >
                Available Now on Amazon
              </a>
              <a
                className="button border-only"
                target="_blank"
                href="https://www.barnesandnoble.com/w/book/1144344669?ean=9798218311940"
              >
                Available Now at Barnes &amp; Noble
              </a>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <span><FontAwesomeIcon icon={faCheck} />
</span>
              </div>
              <div className="feature-text">
                <h4>Your Journey to Success:</h4>
                <p>How to Accept the Answers You Discover Along the Way</p>
              </div>
            </div>

            <div className="button-row">
              <a
                className="button"
                target="_blank"
                href="https://www.amazon.com/Your-Journey-Success-Answers-Discover/dp/1981471014/ref=pd_bxgy_thbs_d_sccl_1/132-0708785-7014928?pd_rd_w=CfSq4&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=ZRMZB2TSRDBJ8SH47VR0&pd_rd_wg=rtzAf&pd_rd_r=e5cf0ae3-3835-4720-a77f-4588fa9681ba&pd_rd_i=1981471014&psc=1"
              >
                Available Now on Amazon
              </a>
              <a
                className="button border-only"
                target="_blank"
                href="https://www.barnesandnoble.com/w/your-journey-to-success-kenny-weiss/1127688967?ean=9781981471010"
              >
                Available Now at Barnes &amp; Noble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
