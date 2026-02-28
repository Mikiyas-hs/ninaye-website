import { Metrophobic, Nova_Round } from "next/font/google";
import "./globals.css";
import Banner from "@/components/BannerComponent/Banner";
import Header from "@/components/Header/Header";

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

const novaRound = Nova_Round({
  variable: "--font-nova-round",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Ninaye",
  description: "Webshop where you can buy your UV-protected gloves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${metrophobic.variable} ${novaRound.variable}`}>
        <Banner />
        <Header />
        {children}
      </body>
    </html>
  );
}
