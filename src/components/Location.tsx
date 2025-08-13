import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Hospital, ShoppingCart, Utensils, Car } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    {
      icon: GraduationCap,
      name: "University of Central Oklahoma",
      category: "Education",
      distance: "Close proximity"
    },
    {
      icon: Hospital,
      name: "OU Medical Center",
      category: "Healthcare",
      distance: "Minutes away"
    },
    {
      icon: ShoppingCart,
      name: "Target & Walmart",
      category: "Shopping",
      distance: "Nearby"
    },
    {
      icon: Utensils,
      name: "Downtown Edmond",
      category: "Dining & Entertainment",
      distance: "Walking distance"
    },
    {
      icon: Utensils,
      name: "Chick-fil-A, McDonald's, Panda Express, Taco Bell, Cane's, Cava, Chipotle, and more!",
      category: "Fast Food",
      distance: "Close by"
    },
    {
      icon: ShoppingCart,
      name: "Lowe's Hardware",
      category: "Home Improvement",
      distance: "Convenient location"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perfect Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Jubilee Residences is strategically located in the heart of Edmond, 
            putting you close to everything you need for work, study, and play.
          </p>
          
          <div className="flex items-center justify-center text-primary mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Central Edmond Location</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {nearbyPlaces.map((place, index) => {
            const IconComponent = place.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {place.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {place.category}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {place.distance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Car className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">
                    Easy Commute to Everywhere
                  </h3>
                  <p className="text-muted-foreground">
                    Quick access to major roads and highways for easy travel throughout the OKC metro
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;