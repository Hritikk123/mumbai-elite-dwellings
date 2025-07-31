import { Navigation } from "@/components/Navigation";
import { PropertyGrid } from "@/components/PropertyGrid";
import { ContactSection } from "@/components/ContactSection";
import { ScheduleVisitForm } from "@/components/ScheduleVisitForm";
import { RegistrationSection } from "@/components/RegistrationSection";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-luxury-dark/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Mumbai Elite Properties
          </h1>
          <p className="text-xl md:text-2xl text-luxury-text-muted max-w-3xl mx-auto leading-relaxed">
            Discover luxury real estate in Mumbai's most prestigious locations. 
            Your dream property awaits with our exclusive listings.
          </p>
        </div>
      </section>

      {/* Property Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-text mb-4">
              Explore Our Premium Properties
            </h2>
            <p className="text-luxury-text-muted text-lg">
              Choose from our curated selection of luxury properties
            </p>
          </div>
          <PropertyGrid />
        </div>
      </section>

      {/* Contact, Schedule, and Registration Sections */}
      <section className="py-16 px-4 bg-luxury-dark-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContactSection />
            <ScheduleVisitForm />
            <RegistrationSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-dark-card border-t border-luxury-gold/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-luxury-text-muted">
            © 2024 Mumbai Elite Properties. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
