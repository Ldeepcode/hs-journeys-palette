import Navbar from "@/components/Navbar";
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
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* Why Choose Us */}
      <section id="why-us">
        <WhyUs />
      </section>
      
      {/* Popular Destinations */}
      <section id="destinations">
        <Destinations />
      </section>
      
      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* About Us */}
      <section id="about">
        <AboutUs />
      </section>
      
      {/* Contact Form - Most Important Section */}
      <section id="contact">
        <ContactForm />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
