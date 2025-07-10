"use client";
import React from 'react'
import KannyContent from '../components/KannyContent'
import AboutKenny from '../components/AboutKenny'
import FolowersSocial from '../components/FolowersSocial'
import KennyWeissStory from '../components/KennyWeissStory'
import Inspiringyou from '../components/Inspiringyou';
import CoursesSlider from '../components/CoursesSlider';
import SuccessBooks from '../components/SuccessBooks';
import HealTheHurtPodcast from '../components/HealTheHurtPodcast';
import Testimonials from '../components/Testimonials';
import WillAchieve from '../components/WillAchieve';

export default function page() {
  return (
    <main className='pt-1'>
     <KannyContent/>
     <AboutKenny/>
     <FolowersSocial/>
     <KennyWeissStory/>
     <Inspiringyou/>
     <CoursesSlider/>
     <SuccessBooks/>
     <HealTheHurtPodcast/>
     <Testimonials/>
     <WillAchieve/>
    </main>
  )
}

