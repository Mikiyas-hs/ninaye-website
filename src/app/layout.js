import { Metrophobic, Nova_Round } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "@/components/BannerComponent/Banner";
import AccessibilityButton from "@/components/AccessibilityButton/AccessibilityButton";
import Header from "@/components/Header/Header";

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

const openDyslexic = localFont({
  src: "../../public/fonts/OpenDyslexic-Regular.otf",
  variable: "--font-opendyslexic",
});

const novaRound = Nova_Round({
  variable: "--font-nova-round",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Ninaye",
  description: "Webshop voor UV-beschermende handschoenen",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${metrophobic.variable} ${openDyslexic.variable} ${novaRound.variable}`}>
        <AccessibilityButton />
        <Banner />
        <Header />
        {children}
      </body>
    </html>
  );
}
