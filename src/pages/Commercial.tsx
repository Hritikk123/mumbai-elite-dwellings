import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties = [
  {
    id: "1",
    title: "Premium Office Space in Business District",
    area: "3500",
    location: "Andheri",
    priceRange: "₹8.5 - 9.2 Crores",
    amenities: ["Central AC", "Power Backup", "Security", "Parking", "Conference Rooms"]
  },
  {
    id: "2",
    title: "Modern Commercial Complex",
    area: "2200",
    location: "Malad",
    priceRange: "₹5.8 - 6.5 Crores",
    amenities: ["Elevators", "Security", "Parking", "Food Court", "Reception"]
  },
  {
    id: "3",
    title: "Corporate Office with Terrace",
    area: "4200",
    location: "Goregaon",
    priceRange: "₹12.5 - 14.2 Crores",
    amenities: ["Private Terrace", "Central AC", "Conference Rooms", "Parking", "Cafeteria"]
  },
  {
    id: "4",
    title: "Retail Space in Prime Location",
    area: "1800",
    location: "Kandivali",
    priceRange: "₹4.2 - 4.8 Crores",
    amenities: ["Street Facing", "High Visibility", "Parking", "Security"]
  },
  {
    id: "5",
    title: "IT Park Office Space",
    area: "5000",
    location: "Jogeshwari",
    priceRange: "₹15.5 - 17.8 Crores",
    amenities: ["IT Infrastructure", "Conference Rooms", "Cafeteria", "Parking", "Security"]
  },
  {
    id: "6",
    title: "Commercial Showroom",
    area: "2800",
    location: "Ram Mandir",
    priceRange: "₹6.8 - 7.5 Crores",
    amenities: ["Display Windows", "Storage", "Parking", "Security", "Central Location"]
  }
];

const Commercial = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            Commercial Properties
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Premium office spaces and commercial properties for your business
          </p>
        </div>
        
        <PropertyUploadForm propertyType="Commercial" />
        <PropertyListing properties={sampleProperties} propertyType="Commercial" />
      </div>
    </div>
  );
};

export default Commercial;