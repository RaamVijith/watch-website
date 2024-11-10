import { useState } from 'react';

interface BannerProps {
  leftImage: string;
  rightImage: string;
}

const WatchBanner = ({ leftImage, rightImage }: BannerProps) => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left Banner */}
      <div 
        className="relative overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
      >
        <div className="relative h-96 overflow-hidden">
          <img
            src={leftImage}
            alt="Latest Watch Collection"
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHoveredLeft ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute top-20 left-16 text-left">
          <p className="text-gray-800 text-lg mb-2">- HURRY! 50% OFF</p>
          <h2 className="text-4xl font-serif mb-4">Buy Latest<br />Watch</h2>
          <button className="text-gray-800 text-lg border-b border-gray-800">
            SHOP COLLECTIONS
          </button>
        </div>
      </div>

      {/* Center Banner */}
      <div className="bg-gray-900 flex items-center justify-center p-8">
        <div className="text-center">
          <h3 className="text-white text-3xl mb-2">HURRY UP !!</h3>
          <h2 className="text-white text-7xl font-serif mb-4">Big Offer</h2>
          <p className="text-white text-3xl mb-6">UP TO 50% OFF</p>
          <button className="bg-white text-gray-900 px-6 py-2 hover:bg-gray-100 transition-colors">
            VIEW MORE
          </button>
        </div>
      </div>

      {/* Right Banner */}
      <div 
        className="relative overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
      >
        <div className="relative h-96 overflow-hidden">
          <img
            src={rightImage}
            alt="Trendy Watch Collection"
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHoveredRight ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute top-20 left-16 text-left">
          <p className="text-gray-800 text-lg mb-2">- HURRY! 50% OFF</p>
          <h2 className="text-4xl font-serif mb-4">Buy Trendy<br />Watch</h2>
          <button className="text-gray-800 text-lg border-b border-gray-800">
            SHOP COLLECTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchBanner;