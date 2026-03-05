import { getImageProps } from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  const { props: desktopProps } = getImageProps({
    src: "/images/image-model.png",
    alt: "Vrouw met Ninaye UV-beschermende handschoenen",
    width: 1536,
    height: 1024,
    priority: true,
  });

  const { props: mobileProps } = getImageProps({
    src: "/images/Model.png",
    alt: "Vrouw met Ninaye UV-beschermende handschoenen",
    width: 680,
    height: 1024,
    priority: true,
  });

  return (
    <section className="hero">
      <picture>
        <source media="(min-width: 700px)" srcSet={desktopProps.srcSet} />
        <img {...mobileProps} alt="Vrouw met Ninaye UV-beschermende handschoenen" className="hero-image" />
      </picture>
      <h1>BESCHERMD TEGEN UV.</h1>
      <a href="/collection" className="hero-cta">
        Onze nieuwe UV-Gloves
      </a>
    </section>
  );
}
