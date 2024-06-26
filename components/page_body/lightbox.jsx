"use client";
import { productThumbnails } from "@lib/utils";
import Image from "next/image";
import { productImages } from "@lib/utils";
import { SvgClose } from "@components/ui/icons";
import { useState } from "react";
import { ButtonNext, ButtonPrevious } from "@components/ui/buttons";

const Lightbox = ({ className, handleIsLightboxOpen }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const prevSlide = () => {
    const isFristSlide = selectedImage === 0;
    const newIdenx = isFristSlide
      ? productImages.length - 1
      : selectedImage - 1;
    setSelectedImage(newIdenx);
  };

  const nextSlide = () => {
    const isLastSlide = selectedImage === productImages.length - 1;
    const newIdenx = isLastSlide ? 0 : selectedImage + 1;
    setSelectedImage(newIdenx);
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const isSelected = (index) => {
    return index === selectedImage;
  };
  return (
    <section className={className}>
      <button
        className="-mb-6 cursor-pointer place-self-end"
        role="button"
        type="button"
        aria-label="Close Lightbox"
        onClick={handleIsLightboxOpen}
      >
        <SvgClose className="fill-white transition-colors duration-100 ease-in-out hover:fill-orange-500" />
      </button>
      <div className="relative flex max-w-[34.375rem] cursor-pointer items-center  ">
        <Image
          src={productImages[selectedImage].url}
          width={550}
          height={550}
          alt={`Product Image ${selectedImage + 1}`}
          className="h-full w-full rounded-3xl object-cover"
        />
        <ButtonPrevious
          className="absolute -left-4 z-10 flex size-10 cursor-pointer items-center justify-center place-self-center rounded-full bg-white"
          onClick={prevSlide}
        />
        <ButtonNext
          className="absolute -right-4 z-10 flex size-10 cursor-pointer items-center justify-center place-self-center rounded-full bg-white"
          onClick={nextSlide}
        />
      </div>

      <div className="flex max-w-[34.375rem]  justify-between gap-1 px-[3.375rem]">
        {productThumbnails.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`shrink cursor-pointer overflow-hidden rounded-xl transition-all duration-150 ease-in-out
            ${isSelected(index) ? "outline outline-2 outline-orange-500/100" : ""}`}
          >
            <Image
              key={index}
              src={thumbnail.url}
              width={88}
              height={88}
              alt={`Product Thumbnail ${index + 1}`}
              className={`h-full w-full object-cover transition-all duration-150 ease-in-out hover:opacity-45 ${isSelected(index) ? "opacity-45" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lightbox;
