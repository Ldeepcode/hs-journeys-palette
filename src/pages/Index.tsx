import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us */}
      <WhyUs />
      
      {/* Popular Destinations */}
      <Destinations />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* About Us */}
      <AboutUs />
      
      {/* Contact Form - Most Important Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
