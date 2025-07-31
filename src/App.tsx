import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResidentialFlats from "./pages/ResidentialFlats";
import Commercial from "./pages/Commercial";
import RowHouses from "./pages/RowHouses";
import OtherListings from "./pages/OtherListings";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import ERegistration from "./pages/ERegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties/residential-flats" element={<ResidentialFlats />} />
          <Route path="/properties/commercial" element={<Commercial />} />
          <Route path="/properties/row-houses" element={<RowHouses />} />
          <Route path="/properties/other-listings" element={<OtherListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/e-registration" element={<ERegistration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
