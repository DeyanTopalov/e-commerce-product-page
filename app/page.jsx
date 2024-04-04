import Image from "next/image";
import Navigation from "@components/navbar/navigation";
import Carousel from "@components/page_body/carousel";
import ProductDescr from "@components/page_body/product_descr";
import Carousel2 from "@components/page_body/carousel copy";

export default function Home() {
  return (
    <section>
      <Carousel2 />
      <ProductDescr />
    </section>
  );
}
