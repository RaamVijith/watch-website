import React, { useState } from 'react';

interface Watch {
  id: number;
  name: string;
  imageUrl: string;
}

interface WatchGalleryProps {
  watches?: Watch[];
}

const defaultWatches: Watch[] = [
  {
    id: 1,
    name: "BREGUET WATCH",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/cat-01.jpg"
  },
  {
    id: 2,
    name: "SWATCH WATCH",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/cat-02.jpg"
  },
  {
    id: 3,
    name: "TIMEX WATCH",
    imageUrl: "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/cat-03.jpg"
  }
];

const WatchGallery: React.FC<WatchGalleryProps> = ({ watches = defaultWatches }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="mx-auto px-[5vw] py-[15vh]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-gray-800 font-semibold text-4xl mb-2 text-center pb-[2vh]">

        Best Products
        </h3>
        <div className="bg-gray-800 h-[3px] w-[100px] mb-[5vh]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {watches.map((watch) => (
          <div 
            key={watch.id}
            className="relative overflow-hidden rounded-sm shadow-lg group"
            onMouseEnter={() => setHoveredId(watch.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={watch.imageUrl}
                alt={watch.name}
                className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
                  hoveredId === watch.id ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform transition-transform duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-center">{watch.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchGallery;