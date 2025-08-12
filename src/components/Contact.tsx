import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Make Jubilee Home?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact us today to schedule a tour and see why Jubilee Residences 
            is the perfect place to call home in Edmond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="shadow-medium border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">405-938-1214</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary hover:text-primary/80"
                        onClick={() => window.location.href = 'tel:405-938-1214'}
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">jubilee.edmond@gmail.com</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary hover:text-primary/80"
                        onClick={() => window.location.href = 'mailto:jubilee.edmond@gmail.com'}
                      >
                        Send Email
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Central Edmond<br />
                        Near UCO & OU Medical Center
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Availability</h4>
                      <p className="text-muted-foreground">
                        Now welcoming new residents!<br />
                        Contact us for current availability
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-medium border-primary/20 bg-gradient-brick text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Schedule Your Tour Today
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Experience the comfort and convenience of Jubilee Residences. 
                  Our newly renovated studio apartments with all utilities included 
                  are waiting for you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => window.location.href = 'tel:405-938-1214'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 405-938-1214
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = 'mailto:jubilee.edmond@gmail.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>✓ All utilities (electricity, water, gas, internet)</li>
                    <li>✓ New flooring and appliances</li>
                    <li>✓ New A/C and ceiling fans</li>
                    <li>✓ Plenty of parking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;