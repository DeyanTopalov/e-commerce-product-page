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

  //! To be Tested
  //? Create a Test carousel component and layout the image next
  //? to eachother, with padding in between so it can be swiped like
  //? in the pricing component carousel. Then just add the func for the
  //? buttons

  //! hide scrollbar with this:
  // /* Target the horizontal scrollbar track (hide it) */
  // .custom-scrollbar::-webkit-scrollbar {
  // height: 0 !important; /* Set height to 0 for horizontal scrollbar // */
  // background-color: transparent !important; /* Set background to transparent */
  //}

  return (
    <div className="scrollbar-hidden grid h-[18.75rem] w-full snap-x auto-cols-max grid-flow-col grid-rows-1  overflow-x-auto bg-blue-200">
      <div className="span-3 snap-center">
        <Image
          src="/image-product-1.jpg"
          width={375}
          height={300}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="span-3 snap-center">
        <Image
          src="/image-product-2.jpg"
          width={375}
          height={300}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* <div className="size-64  snap-center bg-red-300"></div>
      <div className="size-64 snap-center bg-green-300"></div>
      <div className="size-64 snap-center bg-purple-300"></div> */}
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
