import { kumbhSans } from "./ui/fonts";
import "@styles/globals.css";
import Navigation from "@components/navbar/navigation";
import { CartProvider } from "@context/CartContext";

export const metadata = {
  title: "E-commerce Product Page",
  description: "Frontend Mentor challenge to build a E-commerce Product Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body
          className={`${kumbhSans.className}text-base grid place-items-center gap-0 bg-white antialiased md:h-screen md:w-full`}
        >
          <header className="sticky top-0 z-50 w-full bg-white md:max-w-[69.375rem]">
            <Navigation />
          </header>
          <main
            className={`${kumbhSans.className} h-svh w-svw   text-left text-base antialiased md:max-w-[69.375rem] md:px-8 md:pt-[5.625rem] lg:px-12 `}
          >
            {children}
          </main>
        </body>
      </CartProvider>
    </html>
  );
}
