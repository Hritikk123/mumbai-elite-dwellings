import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PropertyUploadFormProps {
  propertyType: string;
}

export const PropertyUploadForm = ({ propertyType }: PropertyUploadFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    location: "",
    bhk: "",
    priceRange: "",
    description: "",
    amenities: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Property Listed Successfully!",
      description: "Your property has been added to our listings.",
    });
    setFormData({
      title: "",
      area: "",
      location: "",
      bhk: "",
      priceRange: "",
      description: "",
      amenities: ""
    });
  };

  const locations = [
    "Goregaon",
    "Malad", 
    "Kandivali",
    "Jogeshwari",
    "Ram Mandir",
    "Andheri"
  ];

  return (
    <Card className="bg-luxury-dark-card border-luxury-gold/20 mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent flex items-center gap-2">
          <Plus className="h-6 w-6 text-luxury-gold" />
          List Your {propertyType} Property
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title" className="text-luxury-text">Property Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Luxury 3BHK with Sea View"
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="area" className="text-luxury-text">Area (sq. ft.)</Label>
              <Input
                id="area"
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                placeholder="e.g., 1200"
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location" className="text-luxury-text">Location</Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger className="bg-luxury-dark border-luxury-gold/30 text-luxury-text">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-luxury-dark-card border-luxury-gold/30">
                  {locations.map((location) => (
                    <SelectItem key={location} value={location} className="text-luxury-text hover:bg-luxury-gold/20">
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {propertyType.includes("Residential") && (
              <div>
                <Label htmlFor="bhk" className="text-luxury-text">BHK Configuration</Label>
                <Select value={formData.bhk} onValueChange={(value) => setFormData({...formData, bhk: value})}>
                  <SelectTrigger className="bg-luxury-dark border-luxury-gold/30 text-luxury-text">
                    <SelectValue placeholder="Select BHK" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-dark-card border-luxury-gold/30">
                    <SelectItem value="1BHK" className="text-luxury-text hover:bg-luxury-gold/20">1 BHK</SelectItem>
                    <SelectItem value="2BHK" className="text-luxury-text hover:bg-luxury-gold/20">2 BHK</SelectItem>
                    <SelectItem value="3BHK" className="text-luxury-text hover:bg-luxury-gold/20">3 BHK</SelectItem>
                    <SelectItem value="4BHK" className="text-luxury-text hover:bg-luxury-gold/20">4 BHK</SelectItem>
                    <SelectItem value="5BHK+" className="text-luxury-text hover:bg-luxury-gold/20">5+ BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          
          <div>
            <Label htmlFor="priceRange" className="text-luxury-text">Price Range</Label>
            <Input
              id="priceRange"
              value={formData.priceRange}
              onChange={(e) => setFormData({...formData, priceRange: e.target.value})}
              placeholder="e.g., ₹2.5 - 3.5 Crores"
              className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-luxury-text">Property Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe your property features, nearby amenities, etc."
              className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="amenities" className="text-luxury-text">Key Amenities</Label>
            <Input
              id="amenities"
              value={formData.amenities}
              onChange={(e) => setFormData({...formData, amenities: e.target.value})}
              placeholder="e.g., Swimming Pool, Gym, Security, Parking"
              className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
            />
          </div>
          
          <div className="border-2 border-dashed border-luxury-gold/30 rounded-lg p-6">
            <div className="text-center">
              <Upload className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <p className="text-luxury-text mb-2">Upload Property Photos & Videos</p>
              <p className="text-luxury-text-muted text-sm mb-4">Drag and drop files here or click to browse</p>
              <Button type="button" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark">
                Choose Files
              </Button>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all">
            List Property
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};