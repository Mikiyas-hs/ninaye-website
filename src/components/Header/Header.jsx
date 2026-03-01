'use client'

import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  function handleMenuToggle(e) {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('header-nav--open');
    e.currentTarget.classList.toggle('is-open');
  }

  return (
    <>
      <header className="header">
        <button className="header-menu-btn" onClick={handleMenuToggle}>
          <Image className="icon-hamburger" src="/icons/hamburger.png" alt="Open navigatiemenu" width={40} height={40} />
          <Image className="icon-close" src="/icons/close.png" alt="Sluit navigatiemenu" width={24} height={24} />
        </button>

        <Link href="/" className="header-logo">
          NINAYE
          <span className="visually-hidden"> webshop voor uv bestendige handschoenen</span>
        </Link>

        <button className="header-search">
          <Image src="/icons/search.png" alt="Zoeken" width={24} height={24} />
        </button>
        <Link href="/cart" className="header-cart">
          <Image src="/icons/shopping-cart.png" alt="Winkelwagen" width={24} height={24} />
        </Link>
      </header>

      <nav className="header-nav">
        <a href="/collectie">Collectie</a>
        <a href="/uv-gloves">UV-gloves</a>
        <a href="/about">About</a>
        <a href="/retour">Retour</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
      </nav>
    </>
  );
}
