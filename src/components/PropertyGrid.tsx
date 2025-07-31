import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, TreePine, FolderOpen } from "lucide-react";

const propertyCategories = [
  {
    id: "residential-flats",
    title: "Residential",
    subtitle: "Flats / Apartments",
    icon: Home,
    path: "/properties/residential-flats",
    description: "Luxury apartments and flats in prime Mumbai locations"
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "Properties",
    icon: Building,
    path: "/properties/commercial",
    description: "Premium office spaces and commercial properties"
  },
  {
    id: "row-houses",
    title: "Residential",
    subtitle: "Row Houses",
    icon: TreePine,
    path: "/properties/row-houses", 
    description: "Exclusive row houses with private gardens"
  },
  {
    id: "other-listings",
    title: "Other Listings",
    subtitle: "Offices, Rentals & More",
    icon: FolderOpen,
    path: "/properties/other-listings",
    description: "Diverse property options and rental agreements"
  }
];

export const PropertyGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {propertyCategories.map((category) => {
        const IconComponent = category.icon;
        return (
          <Link key={category.id} to={category.path} className="group">
            <Card className="bg-luxury-dark-card border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-luxury group-hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-luxury rounded-full group-hover:animate-gold-glow">
                    <IconComponent className="h-12 w-12 text-luxury-dark" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-luxury-text mb-2">
                  {category.title}
                </h3>
                <p className="text-xl text-luxury-gold mb-4">
                  {category.subtitle}
                </p>
                <p className="text-luxury-text-muted leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};