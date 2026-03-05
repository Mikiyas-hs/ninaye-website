'use client';

import { useEffect } from 'react';
import './AccessibilityButton.css';

export default function AccessibilityButton() {

  useEffect(() => {

    const toggle = document.querySelector('.a11y-toggle');
    const container = document.querySelector('.a11y-container');

    toggle.addEventListener('click', handleOpen);
    container.addEventListener('click', handleToggle);

    function handleToggle(e) {
      const id = e.target.dataset.id;
      const isActive = e.target.classList.toggle('is-active');
      document.body.classList.toggle(`a11y-${id}`, isActive);
    }

    function handleOpen() {
      toggle.classList.toggle('is-open');
      container.classList.toggle('is-open');
    }

    return () => {
      toggle.removeEventListener('click', handleOpen);
      container.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <>
    <button className="a11y-toggle">
      <span className="visually-hidden">Toegankelijkheidsopties</span>
    </button>
    <aside className="a11y-container">
      <button data-id="text-scale" className="a11y-button">Tekstvergroting</button>
      <button data-id="high-contrast" className="a11y-button">Hoog contrast</button>
      <button data-id="reduce-motion" className="a11y-button">Animaties uit</button>
      <button data-id="dyslexia" className="a11y-button">Dyslexie font</button>
      <button data-id="reading-aid" className="a11y-button">Leeshulp</button>
    </aside>
    </>
  );
}
