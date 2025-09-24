import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Plane, Hotel, Package, Users } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Best deals on domestic and international flights. Compare prices and book with confidence for your perfect travel dates.",
    features: ["Competitive Prices", "Instant Confirmation", "24/7 Support", "Easy Cancellation"]
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description: "Premium accommodations worldwide. From budget stays to luxury resorts, find the perfect place for your journey.",
    features: ["Best Rate Guarantee", "Instant Booking", "Wide Selection", "Customer Support"]
  },
  {
    icon: Users,
    title: "Group Bookings",
    description: "Specialized group travel solutions for families, friends, and corporate teams. Seamless planning for memorable group experiences.",
    features: ["Group Discounts", "Custom Itineraries", "Dedicated Support", "Flexible Booking"]
  },
  {
    icon: Package,
    title: "Holiday Packages",
    description: "Curated travel experiences across incredible destinations. From adventure to relaxation, we craft perfect holiday packages.",
    features: ["All-Inclusive", "Expert Guides", "Customizable", "Value for Money"]
  }
];

const Services = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-2 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-cta bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="flex flex-col h-full hover:shadow-brand transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-primary/10"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-card rounded-full w-fit">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow p-6">
                  <ul className="space-y-2 mb-6 flex-grow">
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
                    className="w-full hover:bg-primary hover:text-white transition-colors"
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