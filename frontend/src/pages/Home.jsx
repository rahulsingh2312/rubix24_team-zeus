import React from 'react'
import Hero from '../components/Hero';
import Why from '../components/Why';
import CarouselSection from '../components/CarouselSection';
import Services from '../components/Services';

function Home() {
  return (
    <div>
        <Hero />
        <Why />
        <CarouselSection />
        <Services />
    </div>
  )
}

export default Home