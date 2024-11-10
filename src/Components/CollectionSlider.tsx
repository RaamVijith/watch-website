import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  buttonText: string;
  imageUrl: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "Special Collection",
    buttonText: "SHOP COLLECTIONS",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/revslider/slider/Main-Banner-04.jpg"
  },
  {
    id: 2,
    title: "Trendy Collection",
    buttonText: "SHOP COLLECTIONS",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/revslider/slider/Main-Banner-01.jpg"
  },
  {
    id: 3,
    title: "Premium Collection",
    buttonText: "SHOP COLLECTIONS",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/revslider/slider/Main-Banner-01.jpg"
  },
  {
    id: 4,
    title: "Classic Collection",
    buttonText: "SHOP COLLECTIONS",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/revslider/slider/Main-Banner-04.jpg"
  }
];

const CollectionSlider: React.FC = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const totalPairs = Math.ceil(collections.length / 2);

  const nextSlide = () => {
    setCurrentPair((prev) => (prev + 1) % totalPairs);
  };

  const prevSlide = () => {
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  return (
    <div className="relative w-[95vw] mx-auto overflow-hidden mt-[10vh] lg:mt-0">
      <div className="relative">
        {/* Aspect ratio container */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {/* Slides container */}
          <div 
            className="absolute top-0 left-0 w-full h-[90vh] flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPair * 100}%)` }}
          >
            {/* Group collections into pairs */}
            {Array.from({ length: totalPairs }).map((_, pairIndex) => (
              <div key={pairIndex} className="w-full h-full flex-shrink-0 flex gap-4">
                {collections.slice(pairIndex * 2, pairIndex * 2 + 2).map((collection) => (
                  <div key={collection.id} className="w-1/2 h-full relative group">
                    {/* Image */}
                    <img
                      src={collection.imageUrl}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-end p-8 justify-center text-center">
                      <div className="bg-black/40 backdrop-blur-sm p-6 mx-[20%] rounded-sm text-white w-full transition-all duration-300 group-hover:bg-black/50">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                          {collection.title}
                        </h2>
                        <button className="inline-block text-white underline font-semibold px-6 text-sm tracking-wider transition-colors">
                          {collection.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPair(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPair === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide pair ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionSlider;