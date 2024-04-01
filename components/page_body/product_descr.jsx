import React from "react";

const ProductDescr = () => {
  return (
    <div>
      <h1>Sneaker Company</h1>
      <h2>Fall limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="Pricing_and_buttons grid gap-2">
        <div className="pricing flex w-full justify-between">
          <div>
            <span>125 USD</span>
            <span>50%</span>
          </div>
          <span>250 USD</span>
        </div>
        <div className="h-[56px] w-full bg-slate-300">Counter</div>
        <div className="h-[56px] w-full bg-orange-600">Add to cart</div>
      </div>
    </div>
  );
};

export default ProductDescr;
