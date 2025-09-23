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
    
    // Validation
    if (!formData.enquiryType || !formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link for basic email functionality
      const emailBody = `New Travel Inquiry from HS Trips Website

Enquiry Type: ${formData.enquiryType}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address || 'Not provided'}
Message: ${formData.message || 'No additional message'}

Please respond to this inquiry as soon as possible.`;

      const mailtoLink = `mailto:hstravels.headoffice@gmail.com?subject=Travel Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Simulate API call delay for user feedback
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        enquiryType: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="enquiryType" className="text-base font-medium">
                    Enquiry Type *
                  </Label>
                  <Select 
                    value={formData.enquiryType} 
                    onValueChange={(value) => handleInputChange('enquiryType', value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flight">Flight Booking</SelectItem>
                      <SelectItem value="hotels">Hotel Booking</SelectItem>
                      <SelectItem value="group-family">Group/Family Booking</SelectItem>
                      <SelectItem value="holiday-packages">Holiday Packages</SelectItem>
                      <SelectItem value="corporate">Corporate Travel Services</SelectItem>
                      <SelectItem value="other">Other/General Query</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
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
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your travel preferences, dates, budget, or any special requirements..."
                  rows={4}
                  className="mt-2"
                />
              </div>

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