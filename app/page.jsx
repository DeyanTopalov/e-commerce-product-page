import Image from "next/image";
import Navigation from "@components/navbar/navigation";
import ProductDescr from "@components/page_body/product_descr";
import DesktopGallery from "@components/page_body/desktop_gallery";

import MobileCarousel from "@components/page_body/mobile_carousel";

// md:flex md:justify-between
export default function Home() {
  return (
    <section className="grid md:grid-cols-2 md:place-content-between md:gap-2">
      <DesktopGallery className="hidden bg-gray-200/50 md:grid md:max-h-[565px] md:max-w-[445px] md:gap-8" />

      <MobileCarousel className="relative grid h-[18.75rem] w-svw md:hidden" />
      <ProductDescr className=" grid gap-4 px-6 pb-[5.5rem] pt-6 md:max-w-[27.8125rem] md:px-0" />
    </section>
  );
}

// hidden bg-gray-200/50 md:grid md:max-h-[565px] md:max-w-[445px] md:gap-8
