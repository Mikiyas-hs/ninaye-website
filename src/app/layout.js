import { Metrophobic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "@/components/BannerComponent/Banner";
import AccessibilityButton from "@/components/AccessibilityButton/AccessibilityButton";

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

const openDyslexic = localFont({
  src: "../../public/fonts/OpenDyslexic-Regular.otf",
  variable: "--font-opendyslexic",
});

export const metadata = {
  title: "Ninaye",
  description: "Webshop where you can buy your UV-protected gloves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${metrophobic.variable} ${openDyslexic.variable}`}>
        <AccessibilityButton />
        <Banner />
        {children}
      </body>
    </html>
  );
}
