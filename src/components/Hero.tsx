import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import manaliHero from "@/assets/manali-hero.jpg";
import lehLadakhHero from "@/assets/leh-ladakh-hero.jpg";
import kashmirHero from "@/assets/kashmir-hero.jpg";
import keralaHero from "@/assets/kerala-hero.jpg";
import jaipurHero from "@/assets/jaipur-hero.jpg";
import udaipurHero from "@/assets/udaipur-hero.jpg";

const destinations = [
  { name: "Manali", image: manaliHero, description: "Snow-capped Himalayas & Adventure" },
  { name: "Leh Ladakh", image: lehLadakhHero, description: "High Altitude Desert Beauty" },
  { name: "Kashmir", image: kashmirHero, description: "Paradise on Earth" },
  { name: "Kerala", image: keralaHero, description: "God's Own Country" },
  { name: "Jaipur", image: jaipurHero, description: "The Pink City of Rajasthan" },
  { name: "Udaipur", image: udaipurHero, description: "City of Lakes & Palaces" },
];

const Hero = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {destinations.map((destination, index) => (
        <div
          key={destination.name}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentDestination ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={destination.image}
            alt={`Beautiful landscape of ${destination.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover
          <span className="bg-gradient-cta bg-clip-text text-transparent"> India</span>
          <br />
          with HsTrips
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-2xl mx-auto">
          Your trusted partner for unforgettable journeys across incredible India
        </p>

        <div className="mb-8">
          <p className="text-lg font-medium bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            {destinations[currentDestination].description}
          </p>
        </div>

        <Button 
          onClick={scrollToForm}
          variant="hero" 
          size="xl"
          className="mb-8"
        >
          Let's Plan Your Trip
        </Button>

        {/* Destination Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentDestination ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`View ${destinations[index].name}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;