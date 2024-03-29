import { kumbhSans } from "./ui/fonts";
import "@styles/globals.css";
import Navigation from "@components/navigation";

export const metadata = {
  title: "E-commerce Product Page",
  description: "Frontend Mentor challenge to build a E-commerce Product Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className}text-base grid place-items-center gap-0 bg-blue-100 antialiased md:h-screen md:w-full`}
      >
        <header className="sticky top-0 w-full bg-yellow-100 md:max-w-[69.375rem]">
          <Navigation />
        </header>
        <main
          className={`${kumbhSans.className} h-svh w-svw bg-green-100 text-left text-base antialiased md:max-w-[69.375rem] md:px-4 `}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

// grid h-svh w-svw grid-cols-1 place-items-center bg-blue-100 md:h-screen md:w-full
