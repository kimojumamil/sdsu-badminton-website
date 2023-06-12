import React from 'react'
import '../App.css';
import HeroSection from './HeroSection';
import { Button } from './Button';
import './HomeHeroSection.css';

function HomeHeroSection() {
  return (
    <HeroSection
        src='../videos/video-1.mp4'
        text='WELCOME'
    />
  )
}

export default HomeHeroSection