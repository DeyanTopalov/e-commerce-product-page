export const links = [
  { href: "#", text: "Collections" },
  { href: "#", text: "Men" },
  { href: "#", text: "Women" },
  { href: "#", text: "About" },
  { href: "#", text: "Contact" },
];

export const productInfo = {
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  originalPrice: 250.0,
  discountedPrice: 125.0,
  discountPercentage: "50%",
};
export const productImages = [
  {
    url: "/image-product-1.jpg",
  },
  {
    url: "/image-product-2.jpg",
  },
  {
    url: "/image-product-3.jpg",
  },
  {
    url: "/image-product-4.jpg",
  },
];

export const productThumbnails = [
  {
    url: "/image-product-1-thumbnail.jpg",
  },
  {
    url: "/image-product-2-thumbnail.jpg",
  },
  {
    url: "/image-product-3-thumbnail.jpg",
  },
  {
    url: "/image-product-4-thumbnail.jpg",
  },
];

export const productPrice = 125.0;

export const formatCurrency = (amount) => {
  return "$" + amount.toFixed(2);
};
