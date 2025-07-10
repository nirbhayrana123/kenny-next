"use client";
import React from 'react'
import Banner from '../components/Banner'
import VertyVerySection from '../components/Vertyverysection'
import AboutUsSection from '../components/AboutUsSection'
import HealingSection from '../components/HealingSection'
import Testimonials from '../components/Testimonials'
import CoursesSlider from '../components/CoursesSlider'
import HowItWorks from '../components/HowItWorks'
import SelfDevelopment from '../components/SelfDevelopment'
import BlogSection from '../components/BlogSection'
import PodcastSection from '../components/PodcastSection'
import BooksSection from '../components/BooksSection'

export default function page() {
  return (
    <div>
     <Banner/>
     <VertyVerySection/>
     <AboutUsSection/>
     <HealingSection/>
     <Testimonials/>
     <CoursesSlider/>
     <HowItWorks/>
     <SelfDevelopment/>
     <BlogSection/>
     <PodcastSection/>
     <BooksSection/>
    </div>
  )
}

