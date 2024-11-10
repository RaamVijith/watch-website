import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

interface TestimonialProps {
  backgroundImage: string;
}

const TestimonialSection = ({ backgroundImage }: TestimonialProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took...",
      author: "Mr. Roema Cyrus"
    },
    {
      id: 2,
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...",
      author: "Ms. Sarah Johnson"
    },
    {
      id: 3,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...",
      author: "Mr. David Chen"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container - Centered both vertically and horizontally */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Quote Icon */}
            <div className="mb-8">
              <svg 
                className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Text Container */}
            <div className="w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 absolute w-full left-0 right-0 ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <p className="text-white text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
                      {testimonial.text}
                    </p>
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-[200px] gap-2 relative">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;