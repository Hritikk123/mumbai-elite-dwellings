import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties: any[] = [
  // Properties will be displayed only when uploaded
];

const OtherListings = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-luxury-gold mb-4">
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