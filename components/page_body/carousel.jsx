"use client";

import { useState } from "react";
import { productImages } from "@lib/utils";
import Image from "next/image";
import { ButtonNext, ButtonPrevious } from "@components/ui/buttons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative flex h-[18.75rem] w-full items-center overflow-hidden">
      {productImages.map((image, index) => (
        <Image
          key={image.url}
          src={image.url}
          width={375}
          height={300}
          alt="Product image"
          className={`absolute h-full w-full object-cover transition-opacity duration-300 ease-in ${
            index === currentIndex ? "opacity-100" : "opacity-0"
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
