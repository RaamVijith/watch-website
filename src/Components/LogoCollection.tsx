// src/components/LogoCollection.tsx

import React from 'react';

const LogoCollection: React.FC = () => {
  // Array of image sources
  const logoImages = [
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/1.png',
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/3.png',
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/4.png',
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/5.png',
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/6.png',
    'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/5.png',
  ];

  return (
    <div className="flex justify-between items-center py-[5vh] px-4 bg-white">
      <div className="px-[5vw] w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logoImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="w-full h-[15vh] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCollection;
