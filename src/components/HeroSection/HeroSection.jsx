import { getImageProps } from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  const { props: desktopProps } = getImageProps({
    src: "/images/image-model.png",
    alt: "Woman wearing Ninaye gloves with UV protection",
    width: 1536,
    height: 1024,
    priority: true,
  });

  const { props: mobileProps } = getImageProps({
    src: "/images/Model.png",
    alt: "Woman wearing Ninaye gloves with UV protection",
    width: 680,
    height: 1024,
    priority: true,
  });

  return (
    <section className="hero">
      <picture>
        <source media="(min-width: 700px)" srcSet={desktopProps.srcSet} />
        <img {...mobileProps} alt="Woman wearing Ninaye gloves with UV protection" className="hero-image" />
      </picture>
      <h1>PROTECTING THROUGH UV.</h1>
      <a href="/collection" className="hero-cta">
        Our new UV gloves
      </a>
    </section>
  );
}
