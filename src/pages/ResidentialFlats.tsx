import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties = [
  {
    id: "1",
    title: "Luxury 3BHK with Sea View",
    area: "1800",
    location: "Andheri",
    bhk: "3BHK",
    priceRange: "₹3.2 - 3.8 Crores",
    amenities: ["Swimming Pool", "Gym", "Security", "Parking", "Garden"]
  },
  {
    id: "2", 
    title: "Premium 2BHK Modern Flat",
    area: "1200",
    location: "Malad",
    bhk: "2BHK",
    priceRange: "₹1.8 - 2.2 Crores",
    amenities: ["Club House", "Security", "Parking", "Power Backup"]
  },
  {
    id: "3",
    title: "Spacious 4BHK Penthouse",
    area: "2500",
    location: "Goregaon",
    bhk: "4BHK",
    priceRange: "₹5.5 - 6.2 Crores",
    amenities: ["Private Terrace", "Swimming Pool", "Gym", "Concierge", "Parking"]
  },
  {
    id: "4",
    title: "Elegant 1BHK Apartment",
    area: "650",
    location: "Kandivali", 
    bhk: "1BHK",
    priceRange: "₹95 Lakhs - 1.2 Crores",
    amenities: ["Security", "Parking", "Garden", "Power Backup"]
  },
  {
    id: "5",
    title: "Luxury 3BHK with Amenities",
    area: "1650",
    location: "Jogeshwari",
    bhk: "3BHK", 
    priceRange: "₹2.8 - 3.3 Crores",
    amenities: ["Swimming Pool", "Gym", "Security", "Parking", "Club House"]
  },
  {
    id: "6",
    title: "Premium 2BHK Near Station",
    area: "1100",
    location: "Ram Mandir",
    bhk: "2BHK",
    priceRange: "₹1.6 - 1.9 Crores", 
    amenities: ["Security", "Parking", "Garden", "Shopping Complex"]
  }
];

const ResidentialFlats = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            Residential Flats & Apartments
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Discover luxury apartments and flats in Mumbai's prime locations
          </p>
        </div>
        
        <PropertyUploadForm propertyType="Residential Flats" />
        <PropertyListing properties={sampleProperties} propertyType="Residential Flats" />
      </div>
    </div>
  );
};

export default ResidentialFlats;