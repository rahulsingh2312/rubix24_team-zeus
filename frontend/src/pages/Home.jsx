import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import CarouselSection from "../components/CarouselSection";
import Services from "../components/Services";
import StartYourJourney from "../components/StartYourJourney";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <CarouselSection />
      <Services />
      <StartYourJourney />
    </div>
  );
}

export default Home;
