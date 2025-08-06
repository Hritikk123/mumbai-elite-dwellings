import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">
            Schedule a Meeting
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Get in touch with us to schedule your property consultation
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-luxury-gold flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6 text-luxury-gold" />
                Contact Us to Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-luxury-text-muted text-center leading-relaxed">
                To schedule a property visit or consultation meeting, please contact us directly through 
                any of the methods below. Our team will work with you to find the perfect time that suits your schedule.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Phone className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h3 className="text-luxury-text font-semibold text-lg mb-2">Call Directly</h3>
                  <p className="text-luxury-text-muted text-sm mb-3">
                    Call us for immediate assistance and to schedule your meeting
                  </p>
                  <p className="text-luxury-gold font-bold text-xl">+91 91675 83110</p>
                  <p className="text-luxury-text-muted text-sm mt-2">Mon-Sat: 10AM-9PM</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Mail className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h3 className="text-luxury-text font-semibold text-lg mb-2">Send Message</h3>
                  <p className="text-luxury-text-muted text-sm mb-3">
                    Email us with your requirements and preferred meeting times
                  </p>
                  <p className="text-luxury-gold font-bold">hritikdesigns@gmail.com</p>
                  <p className="text-luxury-text-muted text-sm mt-2">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="bg-luxury-dark/50 p-6 rounded-lg border border-luxury-gold/20">
                <h4 className="text-luxury-gold font-semibold mb-3 text-center">What to Include in Your Message:</h4>
                <ul className="text-luxury-text-muted space-y-2 text-sm">
                  <li>• Property type you're interested in (residential/commercial)</li>
                  <li>• Preferred location areas in Mumbai</li>
                  <li>• Budget range and specific requirements</li>
                  <li>• Your preferred meeting date and time</li>
                  <li>• Contact number for quick follow-up</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;