import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    review: "HsTrips planned the most amazing Kashmir trip for our family. The houseboat experience was magical, and their attention to detail was incredible. Highly recommended!"
  },
  {
    name: "Rajesh Kumar", 
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    review: "Our Leh Ladakh adventure was perfectly organized. From permits to accommodations, everything was seamless. The team's local knowledge made all the difference."
  },
  {
    name: "Anjali Patel",
    location: "Ahmedabad", 
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    review: "Transparent pricing and excellent service! Our Kerala backwaters honeymoon was dreamy. HsTrips exceeded our expectations in every way."
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80", 
    rating: 4,
    review: "Great experience with HsTrips for our Manali winter trip. The package included everything we needed, and their 24/7 support was really helpful."
  },
  {
    name: "Meera Iyer",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    review: "Udaipur palace tour was spectacular! HsTrips' customized itinerary covered all the must-see places. Professional service from start to finish."
  },
  {
    name: "Arjun Mehta",
    location: "Pune",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5,
    review: "Booked our Rajasthan family vacation through HsTrips. Their end-to-end service and local insights made our trip unforgettable. Worth every penny!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-cta bg-clip-text text-transparent">Travelers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from travelers who trusted us with their dream Indian adventures
          </p>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4" style={{ width: `${testimonials.length * 300}px` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <Card className="h-full hover:shadow-brand transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-primary/10">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-gradient-card text-primary font-semibold">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < testimonial.rating 
                  ? 'text-yellow-500 fill-current' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-600 leading-relaxed italic">
          "{testimonial.review}"
        </p>
      </CardContent>
    </Card>
  );
};

export default Testimonials;