import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties = [
  {
    id: "1",
    title: "Luxury 4BHK Row House with Garden",
    area: "3200",
    location: "Andheri",
    bhk: "4BHK",
    priceRange: "₹8.5 - 9.8 Crores",
    amenities: ["Private Garden", "Parking", "Security", "Terrace", "Study Room"]
  },
  {
    id: "2",
    title: "Modern 3BHK Row House",
    area: "2800",
    location: "Malad",
    bhk: "3BHK", 
    priceRange: "₹6.2 - 7.1 Crores",
    amenities: ["Garden", "Parking", "Security", "Balcony", "Store Room"]
  },
  {
    id: "3",
    title: "Premium 5BHK Villa Style Row House",
    area: "4500",
    location: "Goregaon",
    bhk: "5BHK",
    priceRange: "₹12.5 - 14.8 Crores",
    amenities: ["Large Garden", "Swimming Pool", "Parking", "Security", "Servant Room"]
  },
  {
    id: "4",
    title: "Cozy 2BHK Row House",
    area: "1800",
    location: "Kandivali",
    bhk: "2BHK",
    priceRange: "₹3.8 - 4.5 Crores",
    amenities: ["Small Garden", "Parking", "Security", "Terrace"]
  },
  {
    id: "5",
    title: "Spacious 4BHK with Lawn",
    area: "3800",
    location: "Jogeshwari",
    bhk: "4BHK",
    priceRange: "₹9.2 - 10.5 Crores",
    amenities: ["Large Lawn", "Parking", "Security", "Terrace", "Study Room"]
  },
  {
    id: "6",
    title: "Traditional Style 3BHK Row House",
    area: "2600",
    location: "Ram Mandir",
    bhk: "3BHK",
    priceRange: "₹5.8 - 6.8 Crores",
    amenities: ["Garden", "Parking", "Security", "Balcony", "Pooja Room"]
  }
];

const RowHouses = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            Residential Row Houses
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Exclusive row houses with private gardens and premium amenities
          </p>
        </div>
        
        <PropertyUploadForm propertyType="Row Houses" />
        <PropertyListing properties={sampleProperties} propertyType="Row Houses" />
      </div>
    </div>
  );
};

export default RowHouses;