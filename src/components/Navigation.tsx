import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Phone, Calendar, FileText } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-luxury-dark-card border-b border-luxury-gold/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-luxury-gold group-hover:animate-gold-glow transition-all" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-luxury-gold">
              Mumbai Elite Dwellings
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link to="/contact">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all text-sm">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all text-sm">
                Know Us
              </Button>
            </Link>
            
            <Link to="/schedule">
              <Button variant="ghost" className="text-luxury-text hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </Link>
            
            <Link to="/e-registration">
              <Button className="bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all text-sm">
                <FileText className="h-4 w-4 mr-2" />
                e-Registration
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation - Icons only */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="text-luxury-text hover:text-luxury-gold p-2">
                <Phone className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="ghost" size="sm" className="text-luxury-text hover:text-luxury-gold p-2">
                <Building2 className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/schedule">
              <Button variant="ghost" size="sm" className="text-luxury-text hover:text-luxury-gold p-2">
                <Calendar className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/e-registration">
              <Button size="sm" className="bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all p-2">
                <FileText className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};