import React from 'react';
import '../../../App.css';
import AboutUsHeroSection from '../../AboutUsHeroSection';
import AboutUsCards from './AboutUsCards';
import Footer from '../../Footer';

export default function AboutUs() {
    return(
    <>
    <AboutUsHeroSection />
    <AboutUsCards />
    <Footer />
    </>
    );
}