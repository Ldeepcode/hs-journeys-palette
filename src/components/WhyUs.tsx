import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, MapPin, Headphones, Settings } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. What you see is what you pay, with detailed cost breakdowns for every service."
  },
  {
    icon: MapPin,
    title: "Customized Itineraries", 
    description: "Personalized travel plans crafted around your preferences, budget, and time. Every trip is uniquely yours."
  },
  {
    icon: Settings,
    title: "End-to-End Services",
    description: "From planning to execution, we handle everything. Flights, hotels, activities, and local transport - all sorted."
  },
  {
    icon: Headphones,
    title: "Real-Time Support",
    description: "24/7 customer support throughout your journey. We're always here when you need assistance or guidance."
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-cta bg-clip-text text-transparent">HsTrips</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond just booking trips. We create experiences that last a lifetime with our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="text-center p-6 hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border-primary/10"
              >
                <CardContent className="p-0">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center">
                    <IconComponent size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;