import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties = [
  {
    id: "1",
    title: "Executive Office for Rent",
    area: "1200",
    location: "Andheri",
    priceRange: "₹85,000 - 95,000/month",
    amenities: ["Furnished", "AC", "Parking", "Security", "Internet"]
  },
  {
    id: "2",
    title: "Warehouse Storage Space",
    area: "8000",
    location: "Malad",
    priceRange: "₹2.8 - 3.2 Crores",
    amenities: ["Loading Dock", "Security", "CCTV", "Fire Safety", "24/7 Access"]
  },
  {
    id: "3",
    title: "Co-working Space for Rent",
    area: "2500",
    location: "Goregaon",
    priceRange: "₹1,20,000 - 1,40,000/month",
    amenities: ["Hot Desks", "Meeting Rooms", "Cafeteria", "WiFi", "Reception"]
  },
  {
    id: "4",
    title: "Medical Clinic Space",
    area: "800",
    location: "Kandivali",
    priceRange: "₹55,000 - 65,000/month",
    amenities: ["Separate Entrance", "Waiting Area", "Parking", "AC"]
  },
  {
    id: "5",
    title: "Restaurant Space for Lease",
    area: "1500",
    location: "Jogeshwari",
    priceRange: "₹75,000 - 85,000/month",
    amenities: ["Kitchen Setup", "Dining Area", "Parking", "High Footfall Area"]
  },
  {
    id: "6",
    title: "Studio Apartment for Rent",
    area: "500",
    location: "Ram Mandir",
    priceRange: "₹25,000 - 30,000/month",
    amenities: ["Furnished", "AC", "Parking", "Security", "Near Station"]
  }
];

const OtherListings = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            Other Listings
          </h1>
          <p className="text-luxury-text-muted text-lg">
            Offices, rental spaces, and specialized property options
          </p>
        </div>
        
        <PropertyUploadForm propertyType="Other Listings" />
        <PropertyListing properties={sampleProperties} propertyType="Other Listings" />
      </div>
    </div>
  );
};

export default OtherListings;