import Image from "next/image";
import Navigation from "@components/navbar/navigation";
import ProductDescr from "@components/page_body/product_descr";

import MobileCarousel from "@components/page_body/mobile_carousel";

export default function Home() {
  return (
    <section className="grid md:flex md:justify-between">
      <div className="hidden bg-red-300 md:block md:h-[565px] md:w-[445px]"></div>
      <MobileCarousel />
      <ProductDescr />
    </section>
  );
}
