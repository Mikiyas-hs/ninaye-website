'use client';

import { useEffect } from 'react';
import './AccessibilityButton.css';

export default function AccessibilityButton() {

  useEffect(() => {

    const container = document.querySelector('.a11y-container');

    container.addEventListener('click', handleToggle);

    function handleToggle(e) {
      const id = e.target.dataset.id;
      const isActive = e.target.classList.toggle('is-active');
      document.body.classList.toggle(`a11y-${id}`, isActive);
    }

    return () => container.removeEventListener('click', handleToggle);
  }, []);

  return (
    <aside className="a11y-container">
      <button data-id="text-scale" className="a11y-button">Tekstvergroting</button>
      <button data-id="high-contrast" className="a11y-button">Hoog contrast</button>
      <button data-id="reduce-motion" className="a11y-button">Animaties uit</button>
    </aside>
  );
}
