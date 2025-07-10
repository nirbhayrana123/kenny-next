import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faCalendarDay, faUser } from "@fortawesome/free-solid-svg-icons";

const blogPosts = [
  {
    image: "/images/part1.webp",
    title: "How To Heal The Worst Day Cycle- Part 1",
    date: "May 14, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "For centuries society has stigmatized, and science has incorrectly downplayed the importance of Emotional Authenticity. But unfortunately, these factors have resulted in humans developing an emotionally self-destructive survival process to absorb the childhood...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
  {
    image: "/images/part2.webp",
    title: "How To Heal The Worst Day Cycle – Part 2 Trauma",
    date: "Apr 22, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "Today's Best Day Blog article is here to help you on your journey to healing from the past, gain Emotional Authenticity, and love and accept your perfect imperfections. This is part two of my 5-part series about how to heal The Worst Day Cycle, and here I'm going to...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
  {
    image: "/images/part3.webp",
    title: "How To Heal The Worst Day Cycle – Part 3 Fear",
    date: "Apr 3, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "In part 3 of how to heal The Worst Day Cycle, I will share how the brain and body create the emotional, and chemical addiction to fear, which is stage 2 of the cycle. If you missed parts one and two, I provide links at the end of this article. How the brain works It...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
  {
    image: "/images/part4.webp",
    title: "How To Heal The Worst Day Cycle – Part 4 Shame",
    date: "Apr 1, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "As a species, we need two things to survive, attachment to another human being and the ability to pursue our authentic selves. Because our caregivers are human and therefore, perfectly imperfect, we survive by dropping our authentic selves to create attachment. The...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
  {
    image: "/images/part5.webp",
    title: "How To Heal The Worst Day Cycle – Part 5 Denial",
    date: "Mar 31, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "It has been my life experience that the single greatest killer on the planet today is denial. It permeates every aspect of life and it is always at the central core of all life problems. Denial of this truth itself is why no one is talking about or dealing with it...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
    {
    image: "/images/part5.webp",
    title: "How To Heal The Worst Day Cycle – Part 5 Denial",
    date: "Mar 31, 2022",
    category: "Worst Day Cycle",
    excerpt:
      "It has been my life experience that the single greatest killer on the planet today is denial. It permeates every aspect of life and it is always at the central core of all life problems. Denial of this truth itself is why no one is talking about or dealing with it...",
    authorImg: "/images/16.jpg",
    author: "Kenny",
    link: "#",
  },
];

export default function BookPosts() {
  return (
    <section className="book-post">
      <div className="container">
        <div className="booklistblog">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bookcard"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="bookcardimg">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="bookcardbody">
                <h4>{post.title}</h4>
                <div className="info">
                  <div>
                    <FontAwesomeIcon icon={faCalendar}/> {post.date}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUser}/>
                    <i className="fa-solid fa-user-tie"></i> {post.category}
                  </div>
                </div>
                <p>{post.excerpt}</p>

                <div className="author">
                  <div>
                    <Image
                      src={post.authorImg}
                      alt={post.author}
                      width={40}
                      height={40}
                    />
                    <div className="author-info">
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  <a href={post.link} className="learn-more-link abslut">
                    Read More <span className="arrow"><FontAwesomeIcon icon={faArrowRight}/>
                        
                      </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
