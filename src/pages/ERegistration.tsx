import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Clock, CheckCircle, Phone, Mail } from "lucide-react";

const ERegistration = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">
            e-Registration Services
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Professional online rental agreement registration services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* What We Offer Section */}
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
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
            </CardContent>
          </Card>

          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-luxury-gold flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-luxury-gold" />
                What We Offer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-luxury-text-muted text-center leading-relaxed">
                At Hritik Estate Consultant, we provide comprehensive e-registration services for rental agreements, 
                making the entire process hassle-free, legally compliant, and digitally secure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h4 className="font-semibold text-luxury-text mb-2">100% Legal Compliance</h4>
                  <p className="text-sm text-luxury-text-muted">Fully compliant with Maharashtra rental laws and regulations</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Clock className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h4 className="font-semibold text-luxury-text mb-2">Quick Turnaround</h4>
                  <p className="text-sm text-luxury-text-muted">Complete e-registration process within 24-48 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h4 className="font-semibold text-luxury-text mb-2">Expert Assistance</h4>
                  <p className="text-sm text-luxury-text-muted">Professional guidance throughout the entire process</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-luxury-gold">
                Our e-Registration Services Include:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Online rental agreement preparation and drafting</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Government stamp duty calculation and payment assistance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Digital document submission and verification</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Legal compliance checking and validation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Certified e-registration completion</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span className="text-luxury-text-muted">Digital certificate delivery and support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-luxury-dark-card border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-luxury-gold">
                Ready to Start e-Registration?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-luxury-text-muted text-center leading-relaxed">
                Contact us today to begin your rental agreement e-registration process. Our experts are ready to guide you through every step.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Phone className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h3 className="text-luxury-text font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-luxury-gold font-bold text-xl">+91 91675 83110</p>
                  <p className="text-luxury-text-muted text-sm mt-2">Mon-Sat: 10AM-9PM</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-luxury rounded-full w-fit mx-auto mb-4">
                    <Mail className="h-8 w-8 text-luxury-dark" />
                  </div>
                  <h3 className="text-luxury-text font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-luxury-gold font-bold">hritikdesigns@gmail.com</p>
                  <p className="text-luxury-text-muted text-sm mt-2">Quick response within 24 hours</p>
                </div>
              </div>
              
              <div className="bg-luxury-dark/50 p-4 rounded-lg border border-luxury-gold/20">
                <p className="text-luxury-text-muted text-center text-sm">
                  <strong className="text-luxury-gold">Note:</strong> Please have your property details, tenant information, 
                  and required documents ready when you contact us for faster processing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ERegistration;