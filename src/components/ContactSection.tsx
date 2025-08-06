import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <Card className="bg-luxury-dark-card border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-luxury-gold">
          Contact Our Luxury Broker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="min-w-0 flex-1">
              <p className="text-luxury-text-muted text-sm">Email</p>
              <p className="text-luxury-text font-semibold break-all">hritikdesigns@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-luxury rounded-full">
              <MapPin className="h-6 w-6 text-luxury-dark" />
            </div>
            <div>
              <p className="text-luxury-text-muted text-sm">Office Address</p>
              <p className="text-luxury-text font-semibold">Goregaon West, Mumbai</p>
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
        </div>
      </CardContent>
    </Card>
  );
};