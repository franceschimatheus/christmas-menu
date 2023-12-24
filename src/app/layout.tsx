import Image from "next/image";
import { ReactNode } from "react";
import Canto from "../assets/canto.png";
import "./globals.css";

import { Great_Vibes, Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-play",
});
const great = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great",
  weight: ["400"],
});

export const metadata = {
  title: "Cardápio de Natal",
  description: "Um cardápio especial para a família Demathé",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${play.variable} ${great.variable} font-sans text-gray-50`}
      >
        <main className="relative flex max-h-screen flex-col items-center overflow-y-auto bg-red-800 p-10">
          <Image
            src={Canto}
            alt="Canto"
            className="absolute -left-4 -top-6 w-1/2 max-w-[20rem]"
          />
          <Image
            src={Canto}
            alt="Canto"
            className="absolute -right-4 -top-6 w-1/2 max-w-[20rem] scale-x-[-1]"
          />
          {children}
        </main>
      </body>
    </html>
  );
}
