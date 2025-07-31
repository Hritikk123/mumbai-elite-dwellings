import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties: any[] = [
  // Properties will be displayed only when uploaded
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