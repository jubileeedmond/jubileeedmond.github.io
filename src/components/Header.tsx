import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Jubilee Residences</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('location')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Location
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex space-x-2 sm:space-x-3">
          <Button 
            onClick={() => window.open('https://www.rentcafe.com/onlineleasing/apartmentsforrent/oleapplication.aspx?propleadsource_2130086=rentcafe&stepname=Apartments&myOlePropertyId=2130086', '_blank')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
          >
            <span className="hidden sm:inline">Apply Now</span>
            <span className="sm:hidden">Apply</span>
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
          >
            <span className="hidden sm:inline">Schedule Tour</span>
            <span className="sm:hidden">Tour</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;