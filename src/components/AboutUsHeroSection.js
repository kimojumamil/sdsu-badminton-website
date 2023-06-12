import React from 'react'
import '../App.css';
import HeroSection from './HeroSection';
import { Button } from './Button';
import './AboutUsHeroSection.css';

function AboutUsHeroSection() {
  return (
    <HeroSection
        src='../videos/video-1.mp4'
        text='ABOUT US'
    />
  )
}

export default AboutUsHeroSection