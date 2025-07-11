"use client";
import React from 'react' 
import PodcastBanner from '../components/PodcastBanner';
import PodcastVideos from '../components/PodcastVideos';

export default function page() {
  return (
    <main className='pt-1'>
 <PodcastBanner/>
 <PodcastVideos/>
    </main>
  )
}

