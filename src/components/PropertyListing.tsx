import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Ruler, IndianRupee } from "lucide-react";

interface Property {
  id: string;
  title: string;
  area: string;
  location: string;
  bhk?: string;
  priceRange: string;
  amenities: string[];
  image?: string;
}

interface PropertyListingProps {
  properties: Property[];
  propertyType: string;
}

export const PropertyListing = ({ properties, propertyType }: PropertyListingProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-luxury-text mb-6">
        Available {propertyType} Properties
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="bg-luxury-dark-card border-luxury-gold/20 hover:border-luxury-gold/50 transition-all hover:shadow-luxury group">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-dark rounded-t-lg flex items-center justify-center">
                <div className="text-center text-luxury-text-muted">
                  <Home className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Property Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-luxury-text mb-2 group-hover:text-luxury-gold transition-colors">
                  {property.title}
                </h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-luxury-text-muted">
                    <MapPin className="h-4 w-4 mr-2 text-luxury-gold" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center text-luxury-text-muted">
                    <Ruler className="h-4 w-4 mr-2 text-luxury-gold" />
                    <span className="text-sm">{property.area} sq. ft.</span>
                  </div>
                  
                  {property.bhk && (
                    <div className="flex items-center text-luxury-text-muted">
                      <Home className="h-4 w-4 mr-2 text-luxury-gold" />
                      <span className="text-sm">{property.bhk}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-luxury-text-muted">
                    <IndianRupee className="h-4 w-4 mr-2 text-luxury-gold" />
                    <span className="text-sm font-semibold text-luxury-gold">{property.priceRange}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="outline" className="border-luxury-gold/30 text-luxury-text text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {property.amenities.length > 3 && (
                    <Badge variant="outline" className="border-luxury-gold/30 text-luxury-gold text-xs">
                      +{property.amenities.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};