import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            About Hritik Estate Consultant
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Your trusted partner in luxury real estate in Mumbai
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent flex items-center gap-2">
                <Building2 className="h-6 w-6 text-luxury-gold" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-luxury-text-muted leading-relaxed">
                At Hritik Estate Consultant, we specialize in premium real estate services across Mumbai. 
                Our expertise covers residential apartments, commercial properties, row houses, and comprehensive 
                rental agreement services.
              </p>
              <p className="text-luxury-text-muted leading-relaxed">
                We provide end-to-end solutions including property consultation, market analysis, 
                legal documentation, e-registration services, and personalized property visits to help 
                you find your perfect space in Mumbai's dynamic real estate market.
              </p>
              <div className="bg-luxury-dark/50 p-4 rounded-lg border border-luxury-gold/20">
                <h4 className="text-luxury-gold font-semibold mb-2">Our Services:</h4>
                <ul className="text-luxury-text-muted space-y-1 text-sm">
                  <li>• Premium residential property consultation</li>
                  <li>• Commercial space advisory</li>
                  <li>• Rental agreement and e-registration services</li>
                  <li>• Property documentation and legal compliance</li>
                  <li>• Personalized property visits and tours</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <MapPin className="h-6 w-6 text-luxury-dark" />
                </div>
                <div>
                  <p className="text-luxury-text-muted text-sm">Office Location</p>
                  <p className="text-luxury-text font-semibold">Goregaon West, Mumbai</p>
                  <a 
                    href="https://maps.app.goo.gl/zgtpD2R5UQqEcpxp9?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-luxury-gold/80 text-sm transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <Phone className="h-6 w-6 text-luxury-dark" />
                </div>
                <div>
                  <p className="text-luxury-text-muted text-sm">Phone</p>
                  <p className="text-luxury-text font-semibold">+91 91675 83110</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <Mail className="h-6 w-6 text-luxury-dark" />
                </div>
                <div>
                  <p className="text-luxury-text-muted text-sm">Email</p>
                  <p className="text-luxury-text font-semibold">hritikdesigns@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <Clock className="h-6 w-6 text-luxury-dark" />
                </div>
                <div>
                  <p className="text-luxury-text-muted text-sm">Business Hours</p>
                  <p className="text-luxury-text font-semibold">Mon-Sat: 10AM-9PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;