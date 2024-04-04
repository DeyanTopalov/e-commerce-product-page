"use client";

import { useState, useRef } from "react";
import { productImages } from "@lib/utils";
import Image from "next/image";
import { ButtonNext, ButtonPrevious } from "@components/ui/buttons";

const Carousel2 = () => {
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
    <div className=" relative grid h-[18.75rem] w-svw  ">
      <div className="scrollbar-hidden relative grid   snap-x snap-mandatory auto-cols-max grid-flow-col grid-rows-1 gap-2 overflow-x-auto overscroll-x-contain">
        {productImages.map((image, index) => (
          <div key={image.url} className="w-[100svw] snap-center">
            <Image
              key={image.url}
              src={image.url}
              width={375}
              height={300}
              alt="Product image"
              className={` h-full w-full object-cover transition-all duration-300 ease-in ${index === currentIndex ?? "translate-x-16 transform"}`}
            />
          </div>
        ))}
      </div>
      <ButtonPrevious
        className="absolute left-4 flex  size-10 items-center justify-center place-self-center rounded-full bg-white"
        onClick={prevSlide}
      />
      <ButtonNext
        className="absolute right-4 flex size-10 items-center justify-center place-self-center rounded-full bg-white"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel2;

// width={375}
// height={300}
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

{
  /* <div className="w-[100svw] snap-center">
        <Image
          src="/image-product-1.jpg"
          width={375}
          height={300}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-[100svw] snap-center">
        <Image
          src="/image-product-2.jpg"
          width={375}
          height={300}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-[100svw] snap-center">
        <Image
          src="/image-product-1.jpg"
          width={375}
          height={300}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div> */
}
