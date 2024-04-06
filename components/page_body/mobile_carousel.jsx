"use client";

import { useState, useRef } from "react";
import { productImages } from "@lib/utils";
import Image from "next/image";
import { ButtonNext, ButtonPrevious } from "@components/ui/buttons";

const MobileCarousel = () => {
  const containerRef = useRef(null);
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isLastImage, setIsLastImage] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    setIsFirstImage(container.scrollLeft === 0);
    setIsLastImage(
      container.scrollLeft === container.scrollWidth - container.offsetWidth,
    );
  };

  const scrollToNextImage = () => {
    if (!containerRef.current || isLastImage) return;
    const imageWidth = containerRef.current.offsetWidth; // Width of each image container
    const gapWidth = 8; // Width of the gap (adjust as needed)
    const totalWidth = imageWidth + gapWidth; // Total width including the gap
    const maxScrollLeft =
      containerRef.current.scrollWidth - containerRef.current.offsetWidth; // Maximum scrollable distance
    const remainingScroll = maxScrollLeft - containerRef.current.scrollLeft; // Remaining distance to scroll
    const scrollAmount = Math.min(totalWidth, remainingScroll); // Ensure not to scroll beyond the last image
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToPrevImage = () => {
    if (!containerRef.current || isFirstImage) return;
    const imageWidth = containerRef.current.offsetWidth; // Width of each image container
    const gapWidth = 8; // Width of the gap (adjust as needed)
    const totalWidth = imageWidth + gapWidth; // Total width including the gap
    const scrollAmount = Math.min(totalWidth, containerRef.current.scrollLeft); // Ensure not to scroll beyond the first image
    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className=" relative grid h-[18.75rem] w-svw md:hidden "
      aria-label="Product Images Carousel"
    >
      <div
        className="scrollbar-hidden relative grid snap-x snap-mandatory auto-cols-max grid-flow-col grid-rows-1 gap-2 overflow-hidden overflow-x-auto overscroll-x-contain"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {productImages.map((image, index) => (
          <div key={image.url} className="w-svw snap-center overflow-hidden ">
            <Image
              key={image.url}
              src={image.url}
              width={375}
              height={300}
              alt={`Product image ${index + 1}`}
              className={` h-full w-svw overflow-hidden object-cover `}
            />
          </div>
        ))}
      </div>
      <ButtonPrevious
        className={`absolute left-4 flex size-10 cursor-pointer items-center justify-center place-self-center rounded-full bg-white ${isFirstImage ? "opacity-75" : ""}`}
        onClick={scrollToPrevImage}
        disabled={isFirstImage}
      />
      <ButtonNext
        className={`absolute right-4 flex size-10 cursor-pointer items-center justify-center place-self-center rounded-full bg-white ${isLastImage ? "opacity-75" : ""}`}
        onClick={scrollToNextImage}
        disabled={isLastImage}
      />
    </section>
  );
};

export default MobileCarousel;

// ${index === currentIndex ?? "translate-x-16 transform"}`}

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
