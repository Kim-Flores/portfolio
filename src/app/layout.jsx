import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kim's Portfolio",
  description: "Kim Flores' portfolio",
  image: "/favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-content bg-bkg">
      <head>
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      </head>
      <body className={inter.className}>
        <div
          className="fixed inset-0 -z-10 before:absolute before:h-1/2 
            before:w-3/4 before:rounded-tr-full before:rounded-bl-full 
            before:blur-3xl before:bg-accent-2 
            before:animate-spin-slower after:absolute after:h-2/3 
            after:w-2/3 after:rounded-tr-full after:rounded-bl-full 
            after:blur-3xl after:bg-accent-1 
            after:animate-spin-slow"
        ></div>
        {children}
      </body>
    </html>
  );
}
