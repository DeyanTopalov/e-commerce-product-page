"use client";

//! Component not in Use. Code kept for future references

import { useState, useRef } from "react";
import { productImages } from "@lib/utils";
import Image from "next/image";
import { ButtonNext, ButtonPrevious } from "@components/ui/buttons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current &&
      touchEndX.current &&
      Math.abs(touchStartX.current - touchEndX.current) > 50 // Adjust threshold as needed
    ) {
      if (touchStartX.current - touchEndX.current > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === productImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="scrollbar-none relative z-0 flex h-[18.75rem] w-full items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {productImages.map((image, index) => (
        <Image
          key={image.url}
          src={image.url}
          width={375}
          height={300}
          alt="Product image"
          className={`absolute h-full w-full object-cover transition-transform duration-300 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
                ? " -translate-x-full"
                : "translate-x-full"
          }`}
        />
      ))}

      <ButtonPrevious
        className="absolute left-4  flex size-10 items-center justify-center rounded-full bg-white"
        onClick={prevSlide}
      />
      <ButtonNext
        className="absolute right-4  flex size-10 items-center justify-center rounded-full bg-white"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;

//  <div className="relative overflow-hidden">
//       <div className="flex w-full">
//         {images.map((image, index) => (
//           <Image
//             key={image.url}
//             src={image.url}
//             alt={image.alt}
//             className={`object-cover h-full w-full absolute top-0 left-0 transition duration-500 ease-in-out ${
//               index === activeIndex ? '' : 'hidden'
//             }`}
//           />
//         ))}
//       </div>

// Working but can not slide

// return (
//     <div className="relative flex h-[18.75rem] w-full items-center overflow-hidden">
//       <Image
//         src={`${productImages[currentIndex].url}`}
//         width={375}
//         height={300}
//         alt="product image"
//         className="h-full w-full object-cover"
//       />
//       <ButtonPrevious
//         className="absolute left-4  flex size-10 items-center justify-center rounded-full bg-white"
//         onClick={prevSlide}
//       />
//       <ButtonNext
//         className="absolute right-4  flex size-10 items-center justify-center rounded-full bg-white"
//         onClick={nextSlide}
//       />
//     </div>
//   );
// };
