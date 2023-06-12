import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-container'>
        <video src={props.src} autoPlay loop muted />
        <h1>{props.text}</h1>
    </div>
  )
}

export default HeroSection