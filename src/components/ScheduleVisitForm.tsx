import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ScheduleVisitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    propertyType: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Visit Scheduled Successfully!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      propertyType: "",
      message: ""
    });
  };

  return (
    <Card className="bg-luxury-dark-card border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-luxury bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Calendar className="h-6 w-6 text-luxury-gold" />
          Schedule Property Visit
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-luxury-text">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-luxury-text">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="text-luxury-text">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="time" className="text-luxury-text">Preferred Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="propertyType" className="text-luxury-text">Property Type of Interest</Label>
            <Input
              id="propertyType"
              value={formData.propertyType}
              onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
              placeholder="e.g., 2BHK Apartment, Commercial Space"
              className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-luxury-text">Additional Requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Any specific requirements or questions..."
              className="bg-luxury-dark border-luxury-gold/30 text-luxury-text"
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full bg-gradient-luxury text-luxury-dark font-semibold hover:shadow-glow transition-all">
            <Clock className="h-4 w-4 mr-2" />
            Schedule Visit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};