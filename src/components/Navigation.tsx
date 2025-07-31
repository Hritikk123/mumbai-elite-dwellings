import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Phone, Calendar, FileText } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-luxury-dark-card border-b border-luxury-gold/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Building2 className="h-8 w-8 text-luxury-gold group-hover:animate-gold-glow transition-all" />
            <span className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              Mumbai Elite Properties
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/contact">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all">
                Know Us
              </Button>
            </Link>
            
            <Link to="/schedule">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </Link>
            
            <Link to="/e-registration">
              <Button className="bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all">
                <FileText className="h-4 w-4 mr-2" />
                e-Registration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};