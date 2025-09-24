import { Button } from "@/components/ui/button";
import { Instagram, Facebook, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-cta bg-clip-text text-transparent">
              HsTrips
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted travel partner for incredible experiences worldwide. 
              From exotic destinations to amazing adventures, we craft memories that last a lifetime.
            </p>
            
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary/20 hover:text-primary"
              >
                <a 
                  href="https://www.instagram.com/hs_travels___?igsh=YWh3ZnVxcjJndXNv&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary/20 hover:text-primary"
              >
                <a 
                  href="https://wa.me/message/ZF4H5D47JTAQN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageSquare size={20} />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary/20 hover:text-primary"
              >
                <a 
                  href="https://www.facebook.com/share/1Z6Z4BrfiH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hstravels.headoffice@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  hstravels.headoffice@gmail.com
                </a> 
              </div>
              
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-3 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/message/ZF4H5D47JTAQN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  WhatsApp Support
                </a>
              </div>

              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">
                Serving travelers worldwide
              </span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <Button 
                variant="cta" 
                size="sm"
                asChild
                className="w-full"
              >
                <a href="#contact-form">
                  Plan Your Trip Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 HsTrips. All rights reserved. Creating memories across incredible destinations worldwide.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#contact-form" className="text-gray-400 hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;