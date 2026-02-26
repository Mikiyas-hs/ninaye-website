import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <picture>
        <source media="(min-width: 700px)" srcSet="/images/image-model.png" />
        <img
          src="/images/Model.png"
          alt="Woman wearing Ninaye gloves with UV protection"
          className="hero-image"
        />
      </picture>
      <h1>PROTECTING THROUGH UV.</h1>
      <a href="/collection" className="hero-cta">
        Our new UV gloves
      </a>
    </section>
  );
}
