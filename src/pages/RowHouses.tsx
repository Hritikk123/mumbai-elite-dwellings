import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties: any[] = [
  // Properties will be displayed only when uploaded
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