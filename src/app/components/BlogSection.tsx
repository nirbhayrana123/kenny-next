"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookOpenReader,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const blogData = [
  {
    image: "/images/1.jpg",
    title: "We provide you Motivational coaching",
    description:
      "Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
    author: "Admin",
    category: "Motivation",
    link: "/blog.html",
  },
  {
    image: "/images/4.jpg",
    title: "We provide you Motivational coaching",
    description:
      "Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
    author: "Admin",
    category: "Motivation",
    link: "/blog.html",
  },
  {
    image: "/images/10.jpg",
    title: "We provide you Motivational coaching",
    description:
      "Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
    author: "Admin",
    category: "Motivation",
    link: "/blog.html",
  },
  {
    image: "/images/12.jpg",
    title: "We provide you Motivational coaching",
    description:
      "Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
    author: "Admin",
    category: "Motivation",
    link: "/blog.html",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="flex-row" data-aos="fade-up" data-aos-duration="1500">
          <h5 className="tag-line">Our Blog</h5>
          <h3>Latest from the Blog</h3>
          <p className="subtitle">I write about self development and more.</p>
        </div>

        <div className="blog-grid">
          {blogData.map((item, index) => (
            <div className="blog-post" key={index}>
              <div className="blog-img shine-effect">
                <Image src={item.image} alt="Blog Post" width={500} height={300} />
              </div>
              <div className="card-content">
                <div className="meta">
                  <span>
                    <FontAwesomeIcon icon={faUser} /> By: {item.author}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBookOpenReader} /> {item.category}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="post-link" href={item.link}>
                  View more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}