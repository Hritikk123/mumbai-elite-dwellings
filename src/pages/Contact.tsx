import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">
            Contact Us
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Get in touch with our luxury real estate experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactSection />
          
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-luxury-gold">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-luxury-text">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-luxury-text">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-luxury-text">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-luxury-text">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Property inquiry, viewing request, etc."
                    className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-luxury-text">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your property requirements..."
                    className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;