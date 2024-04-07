"use client";
import { productThumbnails } from "@lib/utils";
import Image from "next/image";
import { productImages } from "@lib/utils";
import { useState } from "react";

const DesktopGallery = ({ className }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={className}>
      <div className="cursor-pointer overflow-hidden rounded-3xl">
        <Image
          src={productImages[selectedImage].url}
          width={445}
          height={445}
          alt={`Product Image`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="small_imgs flex w-full justify-between">
        {productThumbnails.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className="cursor-pointer overflow-hidden rounded-xl transition-all duration-150 ease-in-out hover:outline hover:outline-2 hover:outline-orange-500/100"
          >
            <Image
              key={index}
              src={thumbnail.url}
              width={88}
              height={88}
              alt={`Product Thumbnail ${index + 1}`}
              className="transition-all duration-150 ease-in-out hover:opacity-45 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopGallery;
