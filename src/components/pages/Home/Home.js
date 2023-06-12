import React from 'react';
import '../../../App.css';
import HomeHeroSection from '../../HomeHeroSection';
import Cards from './HomeCards';
import Footer from '../../Footer';

function Home () {
    return(
        <>
        <HomeHeroSection />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;