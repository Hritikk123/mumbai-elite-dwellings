import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const RegistrationSection = () => {
  return (
    <Card className="bg-luxury-dark-card border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-luxury-gold flex items-center justify-center gap-2">
          <FileText className="h-6 w-6 text-luxury-gold" />
          Rental e-Registration Services
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-luxury-text-muted text-center leading-relaxed">
          We provide comprehensive online e-registration services for rental agreements, 
          making the process simple, secure, and legally compliant.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="p-3 bg-gradient-luxury rounded-full w-fit mx-auto mb-3">
              <Shield className="h-6 w-6 text-luxury-dark" />
            </div>
            <h4 className="font-semibold text-luxury-text mb-2">Secure & Legal</h4>
            <p className="text-sm text-luxury-text-muted">Fully compliant with Maharashtra rental laws</p>
          </div>
          
          <div className="text-center">
            <div className="p-3 bg-gradient-luxury rounded-full w-fit mx-auto mb-3">
              <Clock className="h-6 w-6 text-luxury-dark" />
            </div>
            <h4 className="font-semibold text-luxury-text mb-2">Quick Process</h4>
            <p className="text-sm text-luxury-text-muted">Complete registration within 24-48 hours</p>
          </div>
          
          <div className="text-center">
            <div className="p-3 bg-gradient-luxury rounded-full w-fit mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-luxury-dark" />
            </div>
            <h4 className="font-semibold text-luxury-text mb-2">Expert Support</h4>
            <p className="text-sm text-luxury-text-muted">Professional guidance throughout</p>
          </div>
        </div>
        
        <div className="bg-luxury-dark/50 p-4 rounded-lg border border-luxury-gold/20">
          <h5 className="text-luxury-gold font-semibold mb-2">Our e-Registration Services Include:</h5>
          <ul className="text-luxury-text-muted space-y-1 text-sm">
            <li>• Online rental agreement preparation</li>
            <li>• Government stamp duty calculation and payment</li>
            <li>• Digital document submission and verification</li>
            <li>• Legal compliance checking and validation</li>
            <li>• Certified e-registration completion</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <Link to="/e-registration">
            <Button className="bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all">
              Start e-Registration Process
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};