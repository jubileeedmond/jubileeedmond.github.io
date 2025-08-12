import { Building2, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Jubilee Residences</h3>
          </div>
          
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Your new home in the heart of Edmond. Newly renovated studio apartments 
            with all utilities included, perfectly located near UCO and OU Medical Center.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
            <a 
              href="tel:405-938-1214" 
              className="flex items-center space-x-2 text-background/90 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>405-938-1214</span>
            </a>
            <a 
              href="mailto:jubilee.edmond@gmail.com" 
              className="flex items-center space-x-2 text-background/90 hover:text-background transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>jubilee.edmond@gmail.com</span>
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2025 Jubilee Residences. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;