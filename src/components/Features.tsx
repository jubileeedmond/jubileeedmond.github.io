import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Zap, 
  Wind, 
  Car, 
  MapPin, 
  GraduationCap,
  Hospital,
  ShoppingBag 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "Studio Apartments",
      description: "Newly renovated studio apartments with modern finishes and appliances"
    },
    {
      icon: Zap,
      title: "All Utilities Included",
      description: "Electricity, water, gas, and internet - everything you need included in rent"
    },
    {
      icon: Wind,
      title: "New A/C & Ceiling Fans",
      description: "Stay comfortable year-round with brand new HVAC systems"
    },
    {
      icon: Car,
      title: "Plenty of Parking",
      description: "Ample parking spaces available around the building for residents"
    },
    {
      icon: GraduationCap,
      title: "Close to UCO",
      description: "Just minutes from University of Central Oklahoma campus"
    },
    {
      icon: Hospital,
      title: "Near OU Medical Center",
      description: "Convenient access to OU Medical Center for healthcare professionals"
    },
    {
      icon: MapPin,
      title: "Downtown Edmond",
      description: "Walking distance to vibrant downtown Edmond with dining and entertainment"
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Dining",
      description: "Close to Target, Walmart, restaurants, and all your daily needs"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Jubilee Residences?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our newly renovated studio apartments offer the perfect combination of comfort, 
            convenience, and location. Everything you need for modern living in Edmond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;