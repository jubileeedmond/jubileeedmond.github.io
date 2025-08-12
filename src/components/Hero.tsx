import { Button } from "@/components/ui/button";
import { MapPin, Star, Wifi, Car } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/1e6d1ee0-1cfb-41f6-b516-aed32f733a33.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Jubilee Residences
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Newly Renovated Studio Apartments
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            All utilities included in a perfect location close to UCO, OU Medical Center, and Downtown Edmond
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Wifi className="h-8 w-8 mb-2 text-white" />
              <span className="text-sm">All Utilities Included</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 mb-2 text-white" />
              <span className="text-sm">Newly Renovated</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2 text-white" />
              <span className="text-sm">Prime Location</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="h-8 w-8 mb-2 text-white" />
              <span className="text-sm">Plenty of Parking</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-large"
            >
              Schedule a Tour
            </Button>
            <Button 
              size="lg" 
              variant="hero" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;