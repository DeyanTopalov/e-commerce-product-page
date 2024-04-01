import Image from "next/image";
import Navigation from "@components/navbar/navigation";
import Carousel from "@components/page_body/carousel";
import ProductDescr from "@components/page_body/product_descr";

export default function Home() {
  return (
    <section>
      <Carousel />
      <ProductDescr />
    </section>
  );
}
