import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, MapPin } from "lucide-react";
import manaliHero from "@/assets/manali-hero.jpg";
import lehLadakhHero from "@/assets/leh-ladakh-hero.jpg";
import kashmirHero from "@/assets/kashmir-hero.jpg";
import keralaHero from "@/assets/kerala-hero.jpg";
import jaipurHero from "@/assets/jaipur-hero.jpg";
import udaipurHero from "@/assets/udaipur-hero.jpg";

const domesticDestinations = [
  {
    name: "Manali, Himachal Pradesh",
    image: manaliHero,
    description: "Experience the snow-capped Himalayas and thrilling adventures in this popular hill station.",
    highlights: ["Adventure Sports", "Snow Activities", "Mountain Views", "Apple Orchards"],
    rating: 4.8,
    startingPrice: "₹12,999"
  },
  {
    name: "Leh Ladakh, Jammu & Kashmir", 
    image: lehLadakhHero,
    description: "Discover the mystical beauty of high-altitude desert landscapes and Buddhist culture.",
    highlights: ["Desert Mountains", "Monasteries", "Adventure Biking", "Unique Culture"],
    rating: 4.9,
    startingPrice: "₹18,999"
  },
  {
    name: "Kashmir Valley",
    image: kashmirHero,
    description: "Paradise on Earth with beautiful lakes, gardens, and houseboats in Dal Lake.",
    highlights: ["Dal Lake", "Houseboats", "Mughal Gardens", "Shikara Rides"],
    rating: 4.7,
    startingPrice: "₹15,999"
  },
  {
    name: "Kerala Backwaters",
    image: keralaHero,
    description: "God's Own Country with serene backwaters, spice plantations, and Ayurvedic treatments.",
    highlights: ["Backwater Cruise", "Spice Gardens", "Ayurveda", "Beach Resorts"],
    rating: 4.6,
    startingPrice: "₹11,999"
  },
  {
    name: "Jaipur, Rajasthan",
    image: jaipurHero,
    description: "The Pink City showcasing royal palaces, magnificent forts, and vibrant culture.",
    highlights: ["Royal Palaces", "Historic Forts", "Local Markets", "Cultural Shows"],
    rating: 4.5,
    startingPrice: "₹9,999"
  },
  {
    name: "Udaipur, Rajasthan",
    image: udaipurHero,
    description: "City of Lakes featuring stunning palaces, romantic boat rides, and royal heritage.",
    highlights: ["Lake Palace", "City Palace", "Boat Rides", "Sunset Views"],
    rating: 4.8,
    startingPrice: "₹13,999"
  }
];

const internationalDestinations = [
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description: "Modern city of skyscrapers, luxury shopping, and desert adventures.",
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Modern Architecture"],
    rating: 4.7,
    startingPrice: "$899"
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    description: "Garden City with incredible attractions, diverse culture, and amazing food.",
    highlights: ["Gardens by Bay", "Universal Studios", "Marina Bay", "Street Food"],
    rating: 4.8,
    startingPrice: "$1,299"
  },
  {
    name: "Bangkok, Thailand",
    image: "https://images.unsplash.com/photo-1563492065326-1e2834e30979?w=800&q=80",
    description: "Vibrant city with ornate temples, floating markets, and incredible street food.",
    highlights: ["Grand Palace", "Floating Markets", "Street Food", "Thai Massage"],
    rating: 4.6,
    startingPrice: "$699"
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
    description: "Island paradise with beautiful beaches, rice terraces, and spiritual temples.",
    highlights: ["Beach Resorts", "Rice Terraces", "Hindu Temples", "Volcano Views"],
    rating: 4.9,
    startingPrice: "$1,099"
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Tropical paradise with overwater villas, crystal clear waters, and coral reefs.",
    highlights: ["Overwater Villas", "Coral Reefs", "Water Sports", "Luxury Resorts"],
    rating: 4.9,
    startingPrice: "$1,899"
  },
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80",
    description: "City of Love with iconic landmarks, world-class museums, and romantic atmosphere.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River", "French Cuisine"],
    rating: 4.8,
    startingPrice: "$1,599"
  }
];

const Destinations = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const DestinationCard = ({ destination }: { destination: typeof domesticDestinations[0] }) => (
    <Card className="w-full h-full hover:shadow-brand transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-primary/10 overflow-hidden">
      <div className="relative">
        <img
          src={destination.image}
          alt={`Beautiful view of ${destination.name}`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
          <Star className="text-yellow-500 fill-current mr-1" size={16} />
          <span className="font-semibold text-sm">{destination.rating}</span>
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white rounded-full px-3 py-1">
          <span className="font-bold text-sm">From {destination.startingPrice}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <MapPin className="text-primary mr-2 flex-shrink-0" size={18} />
          <h3 className="text-xl font-bold text-gray-900 truncate">{destination.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {destination.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <span
                key={index}
                className="bg-gradient-card text-primary px-3 py-1 rounded-full text-xs font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Button 
            onClick={scrollToForm}
            variant="cta" 
            className="w-full"
          >
            Plan Trip
          </Button>
          <Button 
            onClick={scrollToForm}
            variant="outline" 
            className="w-full"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular <span className="bg-gradient-cta bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations worldwide - from incredible domestic gems to exotic international locations
          </p>
        </div>

        <Tabs defaultValue="domestic" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="domestic" className="text-base">Domestic</TabsTrigger>
            <TabsTrigger value="international" className="text-base">International</TabsTrigger>
          </TabsList>
          
          <TabsContent value="domestic" className="space-y-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {domesticDestinations.map((destination, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/5">
                    <DestinationCard destination={destination} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </TabsContent>
          
          <TabsContent value="international" className="space-y-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {internationalDestinations.map((destination, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/5">
                    <DestinationCard destination={destination} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Destinations;