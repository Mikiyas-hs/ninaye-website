import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <button className="header-menu-btn">
        <Image src="/icons/hamburger.png" alt="Open navigatiemenu" width={24} height={24} />
      </button>

      <Link href="/" className="header-logo">NINAYE</Link>

      <a href="/search" className="header-search">
        <Image src="/icons/search.png" alt="Zoeken" width={24} height={24} />
      </a>
      <a href="/cart" className="header-cart">
        <Image src="/icons/shopping-cart.png" alt="Winkelwagen" width={24} height={24} />
      </a>
    </header>
  );
}
