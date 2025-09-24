import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail } from "lucide-react";

interface FormData {
  enquiryType: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    enquiryType: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validatePhone = (phone: string) => {
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields (only Name, Email, Phone)
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in Name, Email, and Phone Number.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      toast({
        title: "Error", 
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Submit form data to FormSubmit
    setIsSubmitting(true);
    
    // Show success toast immediately (optimistic UI)
    toast({
      title: "Success!",
      description: "Your travel inquiry has been submitted successfully. We'll get back to you soon!",
    });
    
    // Submit to FormSubmit in background using iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'formsubmit-frame';
    document.body.appendChild(iframe);
    
    const tempForm = document.createElement('form');
    tempForm.action = 'https://formsubmit.co/hstravels.headoffice@gmail.com';
    tempForm.method = 'POST';
    tempForm.target = 'formsubmit-frame';
    tempForm.style.display = 'none';
    
    // Add all form fields
    const fields = [
      { name: 'enquiryType', value: formData.enquiryType },
      { name: 'name', value: formData.name },
      { name: 'phone', value: formData.phone },
      { name: 'email', value: formData.email },
      { name: 'address', value: formData.address },
      { name: 'message', value: formData.message },
      { name: '_subject', value: 'New Travel Inquiry from HS Trips Website' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' },
      { name: '_cc', value: 'harpreetsingh9082s@gmail.com' }
    ];
    
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      tempForm.appendChild(input);
    });
    
    document.body.appendChild(tempForm);
    tempForm.submit();
    
    // Clean up after a delay
    setTimeout(() => {
      document.body.removeChild(tempForm);
      document.body.removeChild(iframe);
    }, 2000);
    
    // Reset form
    setFormData({
      enquiryType: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Plan Your <span className="bg-gradient-cta bg-clip-text text-transparent">Dream Trip</span>
          </h2>
          <p className="text-xl text-gray-600">
            Share your travel preferences and we'll create a perfect itinerary just for you
          </p>
        </div>

        <Card className="shadow-brand border-primary/10">
          <CardHeader className="text-center bg-gradient-card">
            <CardTitle className="text-2xl font-bold text-gray-900">Travel Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="enquiryType" className="text-base font-medium">
                    Enquiry Type (Optional)
                  </Label>
                  <select 
                    name="enquiryType"
                    value={formData.enquiryType} 
                    onChange={(e) => handleInputChange('enquiryType', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select enquiry type</option>
                    <option value="flight">Flight Booking</option>
                    <option value="hotels">Hotel Booking</option>
                    <option value="group-family">Group/Family Booking</option>
                    <option value="holiday-packages">Holiday Packages</option>
                    <option value="corporate">Corporate Travel Services</option>
                    <option value="other">Other/General Query</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number *
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="10-digit mobile number"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address *
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-base font-medium">
                  Address (Optional)
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="City, State"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-medium">
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your travel preferences, dates, budget, or any special requirements..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Travel Inquiry from HS Trips Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_cc" value="harpreetsingh9082s@gmail.com,Lakhdeep1874@gmail.com" />
              <input type="hidden" name="_next" value="https://your-website.com/thank-you" />

              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Submit Inquiry
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>We'll respond to your inquiry within 24 hours</p>
              <p className="mt-1">Or call us directly for immediate assistance</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
