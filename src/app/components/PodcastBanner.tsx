'use client'

import React from 'react'
import Image from 'next/image'

const PodcastSection = () => {
  return (
    <>
      <section className="book-section podcast-banner">
        <div className="container">
          <div className="book-row">
            <div className="book-cintent" data-aos="fade-up" data-aos-duration="1500">
              <h5 className="tag-line">Latest episode</h5>
              <h3>Dreams of an artist and unique ideas scattered through a deserted mind</h3>
              <p>
                This is not meant to be pleasant or polite. It is supposed to be true and unique. Yes,
                that's what I try every day... to be unique.
              </p>

              <div className="audio-podcast">
                <div className="audio-content">
                  <div className="audio-player">
                    <iframe
                      src="https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/How-to-Heal-from-a-Narcissistic-Parent-5-Powerful-Steps-to-Reclaim-Your-Life-e358o7u/a-ac1oru3"
                      height="102px"
                      width="400px"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                </div>
              </div>

              <a className="detail2" href="#audioo">More details</a>

             <h4>Follow and subscribe to Heal the Hurt on one of these platforms</h4>
                          <div className="flex-podcastbut mt-0">
                        <a className="button" target="_blank" href="https://www.youtube.com/playlist?list=PLOKbwXgOsMo94Ign8iLvv4mEhnGn1lu09">Youtube</a>
                        <a className="button" target="_blank" href="https://geni.us/KWDywbp">Spotify</a>
                        <a className="button" target="_blank" href="https://geni.us/UwnW71m">iTunes</a>
                        <a className="button" target="_blank" href="https://anchor.fm/healthehurtwithkenny">Anchor.fm</a>
                    </div>
            </div>

            <div className="img-box">
              <div className="background"></div>
              <Image
                src="/images/12.jpg"
                alt=""
                width={400}
                height={300}
                className="image-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="audioo" className="audio-section">
        <div className="container">
              <div className="podcast-butt"> 
                    <h3>Check Out My Latest Episodes!</h3>
                   
                </div>

          <div className="audio-podcast-row">
            {[
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/How-to-Finally-Break-Free-from-a-Narcissistic-Parent-e35ard0',
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/How-to-Heal-from-a-Narcissistic-Parent-5-Powerful-Steps-to-Reclaim-Your-Life-e358o7u/a-ac1oru3',
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/Stop-Defending--Start-Healing-e3528iu/a-ac1gk8d',
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/5-DEADLY-Mistakes-Youre-Making-When-Dealing-with-Narcissists-e350gd7/a-ac1emu8',
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/Why-You-Keep-Going-Back-to-Emotionally-Unavailable-Men-Even-When-You-Know-Better-e34v3ko/a-ac1chlu',
              'https://creators.spotify.com/pod/show/healthehurtwithkenny/embed/episodes/Why-People-Dont-Hear-YouAnd-How-to-Fix-It-e34ohvl/a-ac146f4'
            ].map((url, index) => (
              <div className="iframe-row" key={index}>
                <iframe
                  src={url}
                  height="102px"
                  width="400px"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PodcastSection
