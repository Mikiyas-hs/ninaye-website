import { Metrophobic } from "next/font/google";
import "./globals.css";

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
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
      <body className={metrophobic.variable}>
        {children}
      </body>
    </html>
  );
}
