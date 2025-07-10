"use client";
import React from "react";
import Image from "next/image";

export default function PodcastSection() {
  return (
    <section className="podcast-section" data-aos="fade-up" data-aos-duration="1500">
      <div className="left-bg"></div>
      <div className="right-bg"></div>

      <div className="container">
        <div className="podcast-row">
          <div className="podcast-left">
            <h5 className="tag-line">What we have</h5>
            <h3>Heal The Hurt Podcast</h3>
            <ul>
              <li><p>Proven strategies for emotional regulation and self-love</p></li>
              <li><p>Interviews with therapists, survivors, and thought leaders</p></li>
              <li><p>Guidance on breaking toxic cycles and building healthy boundaries</p></li>
              <li><p>Honest talks about grief, anxiety, self-worth, and healing trauma</p></li>
            </ul>

            <p className="white">
              Welcome to Heal The Hurt, the podcast that offers real, raw, and transformative conversations
              for anyone on the journey of emotional healing. Hosted by compassionate experts in mental
              health, personal growth, and trauma recovery, each episode dives deep into the tools, insights,
              and stories that help you move from pain to power. Whether you're healing from childhood trauma,
              navigating difficult relationships, or simply seeking emotional clarity, Heal The Hurt brings you
              expert advice and heartfelt stories to support your growth.
            </p>

            <div className="button-row spotify">
              <a target="_blank" href="https://www.youtube.com/playlist?list=PLOKbwXgOsMo94Ign8iLvv4mEhnGn1lu09">YouTube</a>
              <a target="_blank" href="https://geni.us/KWDywbp">Spotify</a>
              <a target="_blank" href="https://geni.us/UwnW71m">iTunes</a>
              <a target="_blank" href="https://anchor.fm/healthehurtwithkenny">Anchor.fm</a>
            </div>

            <div className="button-row">
              <a className="button" href="courses.html">See Podcast</a>
              <a className="button whitebt" href="books.html">Book a meeting with Kenny</a>
            </div>
          </div>

          <div className="podcast-right shine-effect">
            <Image src="/images/KEN-Podcast-1.webp" alt="Podcast" width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
