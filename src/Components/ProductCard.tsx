import React, { useState } from 'react';

interface ProductCardProps {
  primaryImage: string;
  secondaryImage: string;
  title: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  primaryImage,
  secondaryImage,
  title,
  price,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white border-[1px] rounded-sm overflow-hidden duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? secondaryImage : primaryImage}
        alt={title}
        className="w-full h-72 object-cover transition-all duration-300 my-16"
      />
      <div className="p-4">
        <h3 className="text-gray-700 font-semibold text-lg mb-2 text-center">{title}</h3>
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 font-semibold text-xl">${price}</p>

        </div>
    
      </div>
    </div>
  );
};

export default ProductCard;