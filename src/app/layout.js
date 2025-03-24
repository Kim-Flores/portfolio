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
    <html lang="en" className="bkg text-content dark:bg-content dark:text-bkg">
      <head>
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}
        {/* <div class="gradient-container">
          <div class="gradient">
            <div class="gradient1"></div>
          </div>
        </div> */}
      </body>
    </html>
  );
}
