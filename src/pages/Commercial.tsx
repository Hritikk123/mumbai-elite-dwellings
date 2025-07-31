import { Navigation } from "@/components/Navigation";
import { PropertyUploadForm } from "@/components/PropertyUploadForm";
import { PropertyListing } from "@/components/PropertyListing";

const sampleProperties: any[] = [
  // Properties will be displayed only when uploaded
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