import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const allImages = [
    {
      src: "images/1e6d1ee0-1cfb-41f6-b516-aed32f733a33.png",
      alt: "Exterior aerial view of Jubilee Residences",
      title: "Main Entrance"
    },

  
    {
      src: "images/527792fb-9c58-438c-a6cd-ed3527443b0d.png",
      alt: "Spacious community lobby",
      title: "Building Lobby"
    },
    
    {
      src: "images/c6968e26-ecb5-4311-a6a3-e69051ad5170.png",
      alt: "Elegant lounge with fireplace",
      title: "Community Lounge"
    },
    {
      src: "images/098b3b7e-5c54-48eb-a222-d6bf3a8805fd.png",
      alt: "Side view of apartment buildings",
      title: "Building Exterior"
    },
    {
      src: "images/Jubilee-Residences (32).jpg",
      alt: "Residential features",
      title: "Newly Renovated Bathroom"
    },
    // Additional property images
  
    {
      src: "images/Jubilee-Residences (19).jpg",
      alt: "Landscaping",
      title: "Laminate Flooring Room"
    },
    {
      src: "images/Jubilee-Residences (13).jpg",
      alt: "Building details",
      title: "Dedicated Mailroon"
    },
    {
      src: "images/Jubilee-Residences (15).jpg",
      alt: "Exterior features",
      title: "Exterior Features"
    },
    {
      src: "images/Jubilee-Residences (16).jpg",
      alt: "Community spaces",
      title: "Aerial View"
    },
    {
      src: "images/Jubilee-Residences (17).jpg",
      alt: "Property view",
      title: "Property View"
    },
    {
      src: "images/Jubilee-Residences (18).jpg",
      alt: "Building architecture",
      title: "Laminate Flooring Room"
    },

    {
      src: "images/Jubilee-Residences (11).jpg",
      alt: "Property interior view",
      title: "Building Hallway"
    },
    {
      src: "images/Jubilee-Residences (22).jpg",
      alt: "Community area",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (23).jpg",
      alt: "Property details",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (24).jpg",
      alt: "Residential view",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (27).jpg",
      alt: "Exterior design",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (28).jpg",
      alt: "Property layout",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (29).jpg",
      alt: "Community features",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (30).jpg",
      alt: "Building design",
      title: "Carpeted Room with A/C"
    },
    {
      src: "images/Jubilee-Residences (31).jpg",
      alt: "Property overview",
      title: "Dedicated Waterheater"
    },


  ];

  // Show first 6 images by default, all images when showAllImages is true
  const images = showAllImages ? allImages : allImages.slice(0, 6);

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of Jubilee Residences and see our beautiful exterior, 
            modern lobby, and comfortable community spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-large transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(image.src, index)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                    View Image
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground">{image.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAllImages(!showAllImages)}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {showAllImages ? 'Show Less' : `See More (${allImages.length - 6} more photos)`}
          </Button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentIndex + 1} of {allImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;