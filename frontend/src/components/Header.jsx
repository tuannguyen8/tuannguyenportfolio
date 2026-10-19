import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <a
          className="site-header__brand"
          href="#top"
          onClick={() => setMenuOpen(false)}
        >
          Tuan Nguyen
        </a>

        <button
          ref={menuButtonRef}
          className="site-header__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${
            menuOpen ? 'site-header__nav--open' : ''
          }`}
          aria-label="Main navigation"
        >
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Work
          </a>
        </nav>
      </div>
    </header>
  );
}