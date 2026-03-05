import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
<header className="header">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label className="header-menu-btn" htmlFor="nav-toggle">
          <Image className="icon-hamburger" src="/icons/hamburger.png" alt="Open navigatiemenu" width={40} height={40} />
          <Image className="icon-close" src="/icons/close.png" alt="Sluit navigatiemenu" width={24} height={24} />
        </label>

        <h1 className="header-logo">
          <Link href="/">
            NINAYE
            <span className="visually-hidden"> webshop voor uv bestendige handschoenen</span>
          </Link>
        </h1>

        <button className="header-search">
          <Image src="/icons/search.png" alt="Zoeken" width={24} height={24} />
        </button>
        <Link href="/cart" className="header-cart">
          <Image src="/icons/shopping-cart.png" alt="Winkelwagen" width={24} height={24} />
        </Link>

      <nav className="header-nav">
      <ul>
        <li><a href="/collectie">Collectie</a></li>
        <li><a href="/uv-gloves">UV-Gloves</a></li>
        <li><a href="/about">Over ons</a></li>
        <li><a href="/retour">Retour</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
      </nav>
</header>
  );
}
