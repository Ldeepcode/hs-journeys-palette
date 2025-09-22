import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Package, Users } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Holiday Packages",
    description: "Curated travel experiences across India's most beautiful destinations. From hill stations to beaches, we craft perfect itineraries.",
    features: ["Custom Itineraries", "All-Inclusive Packages", "Expert Local Guides", "Flexible Booking"]
  },
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Best deals on domestic and international flights. Compare prices and book with confidence for your perfect travel dates.",
    features: ["Competitive Prices", "Instant Confirmation", "24/7 Support", "Easy Cancellation"]
  },
  {
    icon: Hotel,
    title: "Hotel Bookings", 
    description: "From luxury resorts to budget stays, find accommodations that match your style and budget across India.",
    features: ["Verified Properties", "Best Price Guarantee", "Free Cancellation", "Customer Reviews"]
  }
];

const Services = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-cta bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your Indian adventure seamless and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="h-full hover:shadow-brand transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-primary/10"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-card rounded-full w-fit">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    variant="outline" 
                    className="w-full"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;