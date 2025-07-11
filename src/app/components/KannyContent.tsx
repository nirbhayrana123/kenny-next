"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function KannyContent() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="top0" className="kanny-content">
      <div className="container">
        <div className="contentallkanny">
          <img
            className="form-bac"
            src="/images/form-bac.png"
            alt="Background"
        
          />

            <h3>I wasn’t broken. I was just never taught how to feel.</h3>
                    <p>I didn’t come from love. I came from survival.</p>
                    <p>My dad was full of rage—hurt so badly by his own father that he had no idea how to show love. My
                        mom… she was adopted and became an alcoholic. She didn’t have the tools either. No one taught
                        them how to deal with pain, so it spilled onto us.</p>
                    <p>I was one of four kids in a house where emotions weren’t felt—they were feared.</p>
                    <p>I remember being 12 years old, walking in to find my mother unconscious from drinking. That
                        moment is seared into my bones. I didn’t know what to do, how to feel, or even if I had the
                        right to feel anything. So I did what many of us do: I shut it down. I buried it.</p>
                    <p>I dropped who I was to become what everyone else needed—quiet, helpful, invisible when necessary.
                    </p>

          {/* Toggle content with class toggle */}
          <div
            id="kannypagecontent"
            className={`kanneylessloren ${expanded ? "kannyhideshow" : ""}`}
          >
            {expanded && (
              <>
               <br/>
                        <h4>I became the emotional parent.</h4>
                        <p>I grew up fast. Not in wisdom—but in silence. I wore a mask. And underneath it, my real
                            self—the one who wanted to be held, heard, seen—disappeared.</p>
                        <p>As I got older, the pain didn’t leave. It got louder. It showed up as:</p>
                        <ul>
                            <li>
                                <p>Addictions: alcohol, sex, sugar, tobacco, spending</p>
                            </li>
                            <li>
                                <p>Toxic relationships and two failed marriages</p>
                            </li>
                            <li>
                                <p>A child custody battle</p>
                            </li>
                            <li>
                                <p>Bankruptcy</p>
                            </li>
                            <li>
                                <p>And even a professional sports career I never wanted</p>
                            </li>
                        </ul>
                        <p>From the outside, people might’ve thought I was “successful.” On the inside, I was crumbling.
                        </p>



                        <br/>
                        <br/>
                        <h4>One night, I sat with a pen and a question:</h4>
                        <p>How do I write a goodbye letter to my kids?</p>
                        <ul>
                            <li>
                                <p>I was done. I couldn’t carry the weight anymore. But then something broke open in me.
                                </p>
                            </li>
                            <li>
                                <p>As I tried to put my pain into words, I saw what I would be passing down to them.</p>
                            </li>
                            <li>
                                <p>I realized: I don’t want to end my life.
                                </p>
                            </li>
                            <li>
                                <p>I want to end the pain.</p>
                            </li>
                            <li>
                                <p>I didn’t want to disappear.</p>
                            </li>
                            <li>
                                <p>I wanted to be free.</p>
                            </li>
                        </ul>



                        <br/>
                        <br/>
                        <h4>That was the turning point.</h4>
                        <p>I had done nearly 30 years of personal development: therapy, seminars, coaching, books. And
                            still, something felt missing.</p>
                        <ul>
                            <li>
                                <p>All of them taught what to think.</p>
                            </li>
                            <li>
                                <p>None of them taught me how to feel.</p>
                            </li>
                            <li>
                                <p>How to be emotionally authentic.</p>
                            </li>
                            <li>
                                <p>That’s when I made a promise to myself:</p>
                            </li>
                            <li>
                                <p>If I survived this, I would create the very process I needed but never received.
                                </p>
                            </li>
                        </ul>
                        <br/>
                        <br/>
                        <h4> And that’s how the Emotional Authenticity Method was born.</h4>
                        <p>It’s not about fixing yourself.</p>
                        <p>It’s<b> about finally giving yourself permission to feel—safely, honestly, fully.</b></p>
                        <p>It’s about learning how your childhood created patterns that aren’t “you”—they’re just
                            unhealed parts of you still trying to protect themselves.</p>
                        <div className="mtkannycontent">
                            <p>You’re not lazy.</p>
                            <p>You’re not broken.</p>
                            <p>You’re not too emotional or too much or not enough.</p>
                            <p>You were just never taught the emotional skills to navigate life.
                                And now you can.</p>
                        </div>


                        <br/>
                        <br/>
                        <h4>Today, I help others heal the way I had to heal myself.</h4>

                        <p>Through coaching, speaking, and Greatness University, I get to walk people back to their
                            truth. To help them reconnect to the version of themselves they had to abandon to survive.
                        </p>
                        <div className="mtkannycontent">
                            <p><b>And when they do?</b></p>
                            <p>They don’t just feel better.</p>
                        </div>
                        <p>They become who they were always meant to be.</p>

                        <br/><br/>
                        <h4>So if you feel like nothing works…</h4>
                        <p>If you’ve read the books, hired the coach, gone to therapy, and still feel stuck…
                        </p>
                        <p>It’s not because you’re failing.</p>
                        <p>It’s because the root of your pain was never addressed.
                        </p>
                        <p><b>It’s not what’s wrong with you.</b></p>
                        <p><b>It’s what happened to you.</b></p>
                        <p>And now—it’s your turn.</p>
                        <p>To come home to yourself.</p>
                        <p>Not to fix.</p>
                        <p>But to feel.</p>
                        <p>To heal.</p>
                        <p>To become.</p>
              </>
            )}
          </div>

          <a
            href="#top0"
            className="read-more-btn"
            id="toggleBtnkanny"
            onClick={handleToggle}
          >
            {expanded ? "Read Less" : "Read More.."}
          </a>
        </div>
      </div>
    </section>
  );
}
