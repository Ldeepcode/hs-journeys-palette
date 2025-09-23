import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Globe } from "lucide-react";

const AboutUs = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-cta bg-clip-text text-transparent">HsTrips</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Born from a passion for creating incredible travel experiences, HsTrips has been crafting 
              unforgettable journeys worldwide since our inception. We believe every traveler 
              deserves to experience authentic destinations - from exotic international locations to incredible domestic gems.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our deep local knowledge, transparent approach, and commitment to personalized service has helped 
              over 500+ travelers discover amazing destinations worldwide. Whether you're seeking adventure, 
              romance, or cultural experiences, we're here to make it happen.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-gray-600 text-sm">Destinations Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Customer Support</div>
              </div>
            </div>

            <Button 
              onClick={scrollToForm}
              variant="cta" 
              size="lg"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h3>
            
            <div className="space-y-6">
              <Card className="border-primary/10 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Passion for Travel</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We live and breathe travel. Our team's genuine love for amazing destinations worldwide 
                      shows in every itinerary we create.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer First</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your satisfaction is our priority. We go above and beyond to ensure 
                      your travel dreams become reality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Excellence in Service</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Quality is never compromised. From planning to execution, 
                      we maintain the highest standards in everything we do.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Local Expertise</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our deep local connections and insider knowledge ensure you experience 
                      authentic destinations beyond the typical tourist trails.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;