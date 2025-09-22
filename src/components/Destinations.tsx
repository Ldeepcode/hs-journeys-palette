import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import manaliHero from "@/assets/manali-hero.jpg";
import lehLadakhHero from "@/assets/leh-ladakh-hero.jpg";
import kashmirHero from "@/assets/kashmir-hero.jpg";
import keralaHero from "@/assets/kerala-hero.jpg";
import jaipurHero from "@/assets/jaipur-hero.jpg";
import udaipurHero from "@/assets/udaipur-hero.jpg";

const destinations = [
  {
    name: "Manali",
    image: manaliHero,
    description: "Adventure awaits in the snow-capped Himalayas with thrilling activities and breathtaking mountain vistas.",
    highlights: ["Snow Adventures", "Mountain Trekking", "River Rafting"],
    rating: 4.8,
    startingPrice: "₹15,000"
  },
  {
    name: "Leh Ladakh", 
    image: lehLadakhHero,
    description: "Experience the mystical high-altitude desert with ancient monasteries and pristine mountain lakes.",
    highlights: ["Buddhist Culture", "High Altitude Lakes", "Desert Landscapes"],
    rating: 4.9,
    startingPrice: "₹25,000"
  },
  {
    name: "Kashmir",
    image: kashmirHero,
    description: "Float on Dal Lake houseboats in paradise on earth, surrounded by snow-capped peaks and Mughal gardens.",
    highlights: ["Dal Lake", "Mughal Gardens", "Houseboat Stay"],
    rating: 4.7,
    startingPrice: "₹18,000"
  },
  {
    name: "Kerala",
    image: keralaHero,
    description: "Cruise through tropical backwaters, enjoy Ayurvedic wellness, and explore spice plantations in God's own country.",
    highlights: ["Backwater Cruise", "Ayurveda Spa", "Spice Gardens"],
    rating: 4.6,
    startingPrice: "₹12,000"
  },
  {
    name: "Jaipur",
    image: jaipurHero,
    description: "Discover royal palaces, vibrant bazaars, and magnificent forts in the pink city of Rajasthan.",
    highlights: ["Royal Palaces", "Amber Fort", "Local Markets"],
    rating: 4.5,
    startingPrice: "₹10,000"
  },
  {
    name: "Udaipur",
    image: udaipurHero,
    description: "Romance and luxury await in the city of lakes with stunning palaces reflecting in pristine waters.",
    highlights: ["Lake Pichola", "City Palace", "Sunset Views"],
    rating: 4.8,
    startingPrice: "₹14,000"
  }
];

const Destinations = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular <span className="bg-gradient-cta bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore India's most captivating destinations with our expertly crafted travel packages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name}
              className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={`Beautiful ${destination.name} destination`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                  <Star size={16} className="text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-lg px-3 py-1">
                  <span className="text-sm font-medium">Starting {destination.startingPrice}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="text-primary mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={scrollToForm}
                    variant="cta" 
                    className="flex-1"
                  >
                    Plan Trip
                  </Button>
                  <Button 
                    variant="outline" 
                    size="default"
                    onClick={scrollToForm}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;